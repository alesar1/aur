# Maintainer: Riccardo Sacchetto <rsacchetto@nexxontech.it>
pkgname=antares-sql
pkgver=0.5.11
pkgrel=1
pkgdesc="Open source and cross platform SQL client made to be simple and complete"
arch=('x86_64')
url="https://antares-sql.app/"
license=('MIT')
depends=('electron17')
makedepends=('nvm' 'python')
source=("https://github.com/Fabio286/antares/archive/refs/tags/v${pkgver}.tar.gz"
        "antares-sql.desktop"
        "antares-sql.sh")
sha512sums=("d1b9a2344690f58068fe83c7760cdbe2f20ee18b85c34a04260559c073a1f90fc44d57bdd336c3fe1845ba5241d99238ddb27098bfe6180e10153e31462a6bff"
            "4dc1837ee4a8e9e4c610a9fc8b8724a903ebaea1aeed32f30c4ee469d2e12198549bfc760327c413534053f54ffe8248905a925fc5d63d2c6e31d75a413da4dc"
            "b3b1e1c9dfb59fc3e89f3c53194550634a2cd9e45ee9ae1b725c315e1ee3fdf657487409cb044a0c28875031608b6d128475095597de7031a8aa3b601a34baf4")

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
    # Install Node.JS 14 with NVM to avoid compatibility issues
    nvm install 14

    # Enter the Antares source folder downloaded from GitHub
    cd "${srcdir}/antares-${pkgver}"
    # Install JS dependencies
    npm install
}

build() {
    # Enter the Antares source folder downloaded from GitHub
    cd "${srcdir}/antares-${pkgver}"
    # Build (WebPack) the application
    npm run build
    # Run Electron Builder
    npx --no-install electron-builder --linux --"x64" --dir -c.npmRebuild=false -c.electronDist=/usr/lib/electron17 -c.electronVersion=$(</usr/lib/electron17/version) --publish always
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
