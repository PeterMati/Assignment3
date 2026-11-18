Name: Peter Mati

## Assignment 3A

1. Project Setup & Execution Instructions

- Make sure to have Node.js installed on your system in order to use the package manager (npm). You can download it at nodejs.org.
  `node -v`

- Clone the repository to your IDE and cd to the root directory.
  `git clone https://github.com/PeterMati/Assignment3.git`
  `cd Assignment3`
  `cd assignment-3`

- Open a new terminal and install dependencies.
  `npm install`

- After the dependencies are installed, run the application.
  `npm run dev`

- Open the application on your localhost in a browser.

The project directory will have components, data, and pages folders. The components folder will contain CartDrawer, Navbar, and AlbumCard, while the pages folder will contain CatalogPage, CheckoutPage, and AlbumDetailPage. The data folder will contain albums.js. Finally, App.jsx will bring all of the pieces together.

2. React Component Hierarchy & State Flow Architecture

```
<App /> -> 'src/App.jsx' (Owner: cart[Array], isCartOpen[Boolean])

    <Navbar> -> 'src/components/Navbar.jsx' (Props: cartCount[Number], onOpenCart[Function]) (Event: onClick -> onOpenCart)

    <Routes> -> 'src/App.jsx'

        <Route element={<CatalogPage />} path="/"> -> 'src/pages/CatalogPage.jsx' (Owner: selectedGenre[String]) (Props: albums[Array], onAddToCart[Function])
            <CatalogHero>
            <GenreFilterBar> (Event: onClick -> setSelectedGenre)
            <AlbumGrid>
                <AlbumCard> -> 'src/components/AlbumCard.jsx' (Props: album[Object], onAddToCart[Function]) (Event: onClick -> onAddToCart)

        <Route element={<AlbumDetailPage />} path="/album/:albumId"> -> 'src/pages/AlbumDetailPage.jsx' (Owner: qty[Number]) (Props: albums[Array], onAddToCart[Function])
            <AlbumInfo>
            <AlbumQuantity> (Event: onChange -> setQty)
            <AddToCart> (Event: onClick -> onAddToCart)

        <Route element={<CheckoutPage />} path="/checkout"> -> 'src/pages/CheckoutPage.jsx' (Owner: isSubmitted[Boolean], formData[Object]) (Props: cart[Array], onClearCart[Function])
            <CheckoutGrid>
                <CheckoutForm> (Events: onChange -> handleChange, onSubmit -> handleSubmit)
                    <SubmitOrder>
                <OrderSummaryCard>
            <CheckoutSuccess>
                <ReturnToHome>

    <CartDrawer> -> 'src/components/CartDrawer.jsx' (Props: cart[Array], isOpen[Boolean], onClose[Function], onUpdateQuantity[Function], onRemove[Function]) (Event: onClick -> onClose)
        <CartItem>
            <ItemInfo>
            <QuantityControls> (Event: onClick -> onUpdateQuantity)
            <RemoveItem> (Event: onClick -> onRemove)
        <Subtotal>
        <ProceedToCheckout> (Event: onClick -> handleProceedToCheckout)
```
