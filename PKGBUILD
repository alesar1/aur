# Maintainer: Riccardo Sacchetto <rsacchetto@nexxontech.it>
pkgname=antares-sql
pkgver=0.4.3
pkgrel=1
pkgdesc="Open source and cross platform SQL client made to be simple and complete"
arch=('x86_64')
url="https://antares-sql.app/"
license=('MIT')
depends=('electron')
makedepends=('nvm' 'npm' 'yarn' 'python')
source=("https://github.com/Fabio286/antares/archive/refs/tags/v${pkgver}.tar.gz"
        "antares-sql.desktop"
        "antares-sql.sh")
sha512sums=("815bb6e234903e81e19d58d3efaa03fabf687787acd47d410a636d901defc26bf98cdbde5e336c0e3d9c1cfc6413d0f59ce2ab4fe9ec61717db677b3ebfb162d"
            "4dc1837ee4a8e9e4c610a9fc8b8724a903ebaea1aeed32f30c4ee469d2e12198549bfc760327c413534053f54ffe8248905a925fc5d63d2c6e31d75a413da4dc"
            "376ca0474b4bb295c7791f73d84ab1058127adc57e5c4a59944ccb6932a0c06b118ec16b84198b987edd380850704f6451c3ea6d8d6d031737e9c7d7542425ad")

_ensure_local_nvm() {
    # Check if NVM is enabled (and, if so, disable it)
    which nvm >/dev/null 2>&1 && nvm deactivate && nvm unload
    # Use a temp folder as NVM dir to avoid ruining user config
    export NVM_DIR="${srcdir}/.nvm"
    # Load NVM with the temp path
    source /usr/share/nvm/init-nvm.sh || [[ $? != 1 ]]
}

prepare() {
    # Load NVM with temp path
    _ensure_local_nvm
    # Install Node.JS 16 with NVM to avoid compatibility issues
    nvm install 16

    # Enter the Antares source folder downloaded from GitHub
    cd "${srcdir}/antares-${pkgver}"
    # Install JS dependencies
    yarn install
}

build() {
    # Enter the Antares source folder downloaded from GitHub
    cd "${srcdir}/antares-${pkgver}"
    # Build (WebPack) the application
    yarn build
    # Run Electron Builder
    yarn run electron-builder --linux --"x64" --dir -c.npmRebuild=false -c.electronDist=/usr/lib/electron -c.electronVersion=$(</usr/lib/electron/version)
}

package() {
    # Enter the source directory
    cd "${srcdir}"
    # Install the desktop file
    install -Dm644 ./antares-sql.desktop "${pkgdir}/usr/share/applications/antares-sql.desktop"
    # Install the startup script
    install -Dm755 ./antares-sql.sh "${pkgdir}/usr/bin/antares-sql"

    # Enter the Antares source folder downloaded from GitHub
    cd "antares-${pkgver}"
    # Create destination directory
    install -dm755 "${pkgdir}/usr/lib/antares-sql"
    # Install the asar archive
    install -Dm644 ./build/linux-unpacked/resources/app.asar "${pkgdir}/usr/lib/antares-sql/antares-sql.asar"
    # Copy the folder with the native dependencies
    cp -r ./build/linux-unpacked/resources/app.asar.unpacked "${pkgdir}/usr/lib/antares-sql/antares-sql.asar.unpacked"
    # Install the icon
    install -Dm644 ./assets/appx/Square150x150Logo.png "${pkgdir}/usr/share/icons/antares-sql.png"
}
