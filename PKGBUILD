
# Maintainer: Eduard Wirch <wirch.eduard@gmail.com>
# Contributor: Martin Lukes <martin.meridius@gmail.com>

_appname=smartgit
pkgname=${_appname}_preview
pkgver=21.1_preview_2
pkgrel=1
pkgdesc="Graphical Git client. Preview version."
arch=("any")
url="https://www.syntevo.com/smartgit/preview/"
license=('custom')
depends=("java-environment>=11" "python3")
optdepends=("mercurial: hg repositories support"
            "git: git repositories support")
makedepends=("tar")
replaces=("smartgithg")
conflicts=("smartgit")
provides=("smartgit")

# package version as it appears in the name of tar.gz archive file
_pkgver=${pkgver//_/-}
_pkgver=${_pkgver//./_}

source=("https://www.syntevo.com/downloads/smartgit/${_appname}-${_pkgver}.deb")
sha1sums=('3ef9b582c0aad9eb5292006c53d153dff79ad4c8')

package() {
    cd "$srcdir"

    tar -xzf data.tar.gz -C "${pkgdir}"

    # Unbundle JRE
    rm -rf "${pkgdir}/usr/share/${_appname}/jre"

    # License
    install -Dm644 "$pkgdir/usr/share/doc/$_appname/license.html" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
