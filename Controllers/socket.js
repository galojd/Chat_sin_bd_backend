
const ConectarCliente = (io) => {
    io.on("connection", (socket) => {
        console.log(socket.id),
        console.log('Usuario conectado'),
        socket.on("entrar_sala", (data) => {
            socket.join(data),
            console.log(`usuario con id: ${socket.id} se unio a la sala ${data}`)
        })
    
        socket.on("enviar_mensaje", (data) => {
            socket.to(data.room).emit("recibir-mensaje",data)
        })
    
        socket.on("disconnect", () => {
            console.log("Usuario desconectado", socket.id)
        })
    });
}

module.exports = {ConectarCliente}