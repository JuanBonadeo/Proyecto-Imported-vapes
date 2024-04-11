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
    const [nombre, setNombre] = useState('');
    const [pago, setPago] = useState('transf');
    const [entrega, setEntrega] = useState('envio');
    const [domicilio, setDomicilio] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const buyCart = (e) => {
        e.preventDefault();
        if (!nombre) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos',
                icon: 'error',
                confirmButtonText: 'Ok',
            })} else {
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
                        mensajePedido += 'Costo de envio: $8000\n\n';
                        let totalConEnvio = 8000 + total;
                    }
                    mensajePedido += 'pedido:\n';
                    cart.forEach((prod) => {
                        mensajePedido += `*${prod.nombre}*  Cantidad: *${prod.quantity}* Precio: *${calcularDescuento(prod.precio * prod.quantity, prod.descuento)}*\n`;
                    });
                    mensajePedido += `\nTotal: *${formatearMoneda(total)}*`;
                    if (entrega === 'envio') {
                        mensajePedido += `\nTotal Con Envio: *${formatearMoneda(totalConEnvio)}*`;
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
    }
    return (
        <div className="containerP">
            <h1>Completa tu Pedido</h1>
            <form onSubmit={(e) => { e.preventDefault(); buyCart(); }}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input type="text" id="name" name="name" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor='payment'>Método de Pago:</label>
                        <select name="payment" id="payment" value={pago} onChange={(e) => setPago(e.target.value)} required>
                            <option value="transf">Transf. Bancaria</option>
                            <option value="efectivo">Efectivo</option>
                            <option value="tarjeta">Tarjeta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor='entrega'>Método de Entrega</label>
                        <select name="entrega" id="entrega" value={entrega} onChange={(e) => setEntrega(e.target.value)} required>
                            <option value="envio">Envío a Domicilio</option>
                            <option value="retiro">Retiro en Local</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Domicilio:</label>
                        <input type="text" id="address" name="address" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
                    </div>
                </div>

                <h4>Total Estimado: {`${formatearMoneda(total)} + envío`}</h4>
                <button className="Button"type='submit' onClick={buyCart}>Comprar</button>
            </form>
        </div>
    );
};

export default FinishPurchase;