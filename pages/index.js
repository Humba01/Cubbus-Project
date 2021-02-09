function wcube() {
  return (
    <section style={cabecalho.setorCabecalho}>
      <h1>HN-WCube</h1>
    </section>
  )
}

const cabecalho = StyleSheet.create({
  setorCabecalho: {
    backgroundColor: "#000000",
    color: "#ffffff",
    fontFamily: "Ubuntu-Light"
  }
});

export default wcube;