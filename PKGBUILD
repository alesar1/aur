# Maintainer: Riccardo Sacchetto <rsacchetto@nexxontech.it>
pkgname=antares-sql
pkgver=0.3.5
pkgrel=1
pkgdesc="Open source and cross platform SQL client made to be simple and complete"
arch=('x86_64')
url="https://antares-sql.app/"
license=('MIT')
depends=('electron')
makedepends=('nodejs' 'npm' 'yarn' 'python')
source=("https://github.com/Fabio286/antares/archive/refs/tags/v${pkgver}.tar.gz"
        "antares-sql.desktop"
        "antares-sql.sh")
sha512sums=("cf38344928abd356b79b29f3bde1fc4a0482eb1dd9a33b385a5ecea2562ea15a8c321a0aee15a7ba71e8494f946e0366321333cec1878ccd78264fd1d38fd21a"
            "4dc1837ee4a8e9e4c610a9fc8b8724a903ebaea1aeed32f30c4ee469d2e12198549bfc760327c413534053f54ffe8248905a925fc5d63d2c6e31d75a413da4dc"
            "3bd2d14bad7aaeea6bd132074f04900ffed98089647a416c627bee4341b732d4722135acc7fa44cdc921bf8b241fd6ac5d81112fcddbaa21b3b6ad45b86b6970")

prepare() {
	cd "${srcdir}/antares-${pkgver}"
    yarn install
}

build() {
	cd "${srcdir}/antares-${pkgver}"
	yarn build
    yarn run electron-builder --linux --"x64" --dir -c.electronDist=/usr/lib/electron -c.electronVersion=$(</usr/lib/electron/version)
}

package() {
	cd "${srcdir}"
    install -Dm644 ./antares-sql.desktop "${pkgdir}/usr/share/applications/antares-sql.desktop"
    install -Dm755 ./antares-sql.sh "${pkgdir}/usr/bin/antares-sql"

    cd "antares-${pkgver}"
    install -Dm644 ./dist/linux-unpacked/resources/app.asar "${pkgdir}/usr/lib/antares-sql.asar"
    install -Dm644 ./build/appx/Square150x150Logo.png "${pkgdir}/usr/share/icons/hicolor/150x150/apps/antares-sql.png"
}
