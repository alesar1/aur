# Maintainer: Santiago Pestarini <santiagonob (a) gmail.com>
# Contributor: Luis Cuadrado <luiscuadrado123 (a) gmail.com>
pkgname=bricscad-legacy
pkgver=13.2.17
pkgrel=1
pkgdesc="BricsCad is a CAD program with Autodesk DWG compatibility."
arch=(any)
url="https://www.bricsys.com"
license=('commercial')
groups=()
depends=()
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=

source=("bricscadv13.2.17.tar.gz::https://copy.com/OiQ2c4w7MJgQREeh/bricscadv13.2.17.tar.gz?download=1"
	"bricscad_simple_logo.png::https://copy.com/gtABrL8xpsb8yl3H/bricscad_simple_logo.png?download=1"
	"bricscad.desktop::https://copy.com/P8g06DHcgUhnu86o/bricscad.desktop?download=1"
	"bricscad13::https://copy.com/I0TrmpazRUFyXY7G/bricscad13?download=1")

md5sums=('2ca6f4b512b9e9ac51e54d53c9edfb25'
	'c24313275d36fa6db16d92d530862739'
	'aa602524fb3687cbf1fab63ee6ea7077'
	'b90151309e0ea94b1f1cee9e6960418c')

noextract=("bricscadv13.2.17.tar.gz")

build() {
    # Extract the tarball
    cd ${srcdir}
    tar xzf bricscadv13.2.17.tar.gz
}

package() {
    # Create directories
    install -dm755 ${pkgdir}/{opt/${pkgname},usr/{bin,share/applications}}
    # Copy the files
    cd ${srcdir}
    cp -R bricscad ${pkgdir}/opt/${pkgname}/
    install -Dm644 bricscad_simple_logo.png ${pkgdir}/opt/${pkgname}/bricscad/
    install -Dm644 bricscad.desktop         ${pkgdir}/usr/share/applications/
    install -Dm755 bricscad13               ${pkgdir}/usr/bin/
    # Create a link in /usr/bin
    #ln -s /opt/${pkgname}/bricscad/bricscad.sh ${pkgdir}/usr/bin/bricscad13
}
