# Maintainer: Eddy <e.pedroni91 at gmail>
# Contributor: Shanto <shanto at hotmail>
# Contributor: Jesus Jerez <jhuss@archlinux.org.ve>

pkgname=eclipse-platform
pkgver=4.6.2
_pkgbuild=201611241400
pkgrel=1
pkgdesc="A minimal installation suitable for complete per-user customization with the built-in Eclipse package manager"
url="http://www.eclipse.org"
arch=('i686' 'x86_64')
license=('EPL')
depends=('java-environment' 'gtk2' 'unzip' 'libwebkit' 'libxtst' 'hicolor-icon-theme')
optdepends=()
conflicts=('eclipse')
provides=("eclipse=$pkgver")
install=${pkgname}.install
options=(!strip)

source=(
	"http://www.eclipse.org/downloads/download.php?file=/eclipse/downloads/drops4/R-${pkgver}-${_pkgbuild}/eclipse-platform-${pkgver}-linux-gtk.tar.gz&r=1"
	"eclipse.sh"
	"eclipse.desktop"
)

md5sums=('0ad1c0185450e1f719a5a2802bf40703'
         '66757230837fdebabb8ce91eb4fccc80'
         '6978e306347d49393e7ac833ba47c4ac')

if [ "$CARCH" = "x86_64" ]; then
	source[0]=${source/linux-gtk/linux-gtk-x86_64}
	md5sums[0]='d919f449465a80e2ee0eb93539270604'
fi

package() {
	install -d ${pkgdir}/usr/bin ${pkgdir}/usr/lib ${pkgdir}/usr/share/applications
	
	install -m755 "${srcdir}/eclipse.sh" "${pkgdir}/usr/bin/eclipse"
	install -Dm644 "${srcdir}/eclipse.desktop" "${pkgdir}/usr/share/applications/"
	
	for _i in 16 32 48 256; do
      install -Dm644 ${srcdir}/eclipse/plugins/org.eclipse.platform_${pkgver}*/eclipse${_i}.png "$pkgdir/usr/share/icons/hicolor/${_i}x${_i}/apps/eclipse.png"
    done
    
    mv "${srcdir}/eclipse" "${pkgdir}/usr/share/"
}
