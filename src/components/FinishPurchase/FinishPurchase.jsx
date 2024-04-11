import '../FinishPurchase/FinishPurchase.css';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import '../Button/button.css';
import Swal from 'sweetalert2';


const FinishPurchase = () => {
    const useCart = () => {
        return useContext(CartContext)
    }
    const { cart, total, calcularDescuento, formatearMoneda } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const buyCart = (e) => {
        const nombre = document.getElementById('name').value;
        const pago = document.getElementById('payment').value;
        const entrega = document.getElementById('entrega').value;
        const domicilio = document.getElementById('address').value;
        let totalConEnvio = 0;
        let precioEnvio = 9000
        e.preventDefault();
        Swal.fire({
            title: 'Confirmar compra',
            text: '¿Estás seguro de que deseas realizar la compra? Seras redirigido a WhatsApp para completar la compra.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                let mensajePedido = 'Nombre y Apellido: ' + nombre + '\n';
                mensajePedido += 'Metodo de Pago: ' + pago + '\n';
                mensajePedido += 'Metodo de Entrega: ' + entrega + '\n';
                mensajePedido += 'Domicilio: ' + domicilio + '\n\n';
                if (entrega === 'envio') {
                    mensajePedido += 'Costo de envio: $9000\n\n';
                    totalConEnvio = total + precioEnvio;
                }
                mensajePedido += 'pedido:\n';
                cart.forEach((prod) => {
                    mensajePedido += `*${prod.nombre}*  Cantidad: *${prod.quantity}* Precio: *${calcularDescuento(prod.precio * prod.quantity, prod.descuento)}*\n`;
                });
                mensajePedido += `\nTotal: *${formatearMoneda(total)}*`;
                if (entrega === 'envio' && total >= 30000) {
                    totalConEnvio = total - precioEnvio;
                    mensajePedido += `\nTotal Con Envio: *${formatearMoneda(totalConEnvio)}*`;
                } else {
                    mensajePedido += `\nTotal Con Envio: *${formatearMoneda(total)}*`;
                }

                // Completar con el número de WhatsApp
                const numeroWhatsApp = '5493435409904';

                function esDispositivoMovil() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                // Construir la URL de WhatsApp
                let urlWhatsApp = '';

                if (esDispositivoMovil()) {
                    // Si es un dispositivo móvil, abrir en la aplicación de WhatsApp
                    urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                } else {
                    // Si es una computadora, abrir en WhatsApp Web
                    urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                }

                // Abrir la ventana de chat
                window.open(urlWhatsApp, '_blank');
                window.open(urlWhatsApp, '_blank');
                clearCart();
            }
        });

    }
    return (
        <div className="containerP">
            <h1>Completa tu Pedido</h1>
            <form onSubmit={(e) => { e.preventDefault(); buyCart(e); }}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor='payment'>Método de Pago:</label>
                        <select name="payment" id="payment" required>
                            <option value="transferencia">Transf. Bancaria</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="tarjeta">Tarjeta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='entrega'>Método de Entrega</label>
                        <select name="entrega" id="entrega" required>
                            <option value="envio">Envío a Domicilio</option>
                            <option value="retiro">Retiro en Local</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Domicilio:</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                </div>

                <h4>Total Estimado: {`${formatearMoneda(total)} `}<br></br>
                Envio gratis llevando mas de 30.000$ en productos.
                </h4>
                <button className="Button" type='submit'>Comprar</button>
            </form>
        </div>
    );
}

export default FinishPurchase;