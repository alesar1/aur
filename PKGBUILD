# Maintainer: Mattia Moffa <mattia [at] moffa [dot] xyz>

pkgname=eclipse-jee
epoch=2
pkgver=4.21
pkgrel=1
_release=2021-09/R
pkgdesc="Highly extensible IDE (Enterprise Java and Web version)"
arch=(x86_64)
url="https://www.eclipse.org/"
license=('EPL')
depends=('java-environment>=11' webkit2gtk unzip)
makedepends=()
provides=(eclipse=$pkgver-$pkgrel)
conflicts=(eclipse)

_srcfilename="$pkgname-${_release//\//-}-linux-gtk-$CARCH.tar.gz"
source=("$_srcfilename::https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/$_release/$_srcfilename&r=1"
        "eclipse.desktop")
sha512sums=('c8121b965434bf9a2c1f23dcdd564392f7b72bb0853a439f3df524f5360878c4ab0d4069117f00ecba2d1b4febe2b95ca1b86c44a47b08e4f2e5db8473894807'
            '9da29da1fe9e4ac4b8f1a4faef158155399574752a317addf90f6a068019ad62906f8ce1db11e543c7fee7dbf3dd8273aa34fc86ff2354420371cdf9b017cdf3')

backup=('usr/lib/eclipse/eclipse.ini')

package() {
    install -d "${pkgdir}/usr/lib"
    cp -r "eclipse" "${pkgdir}/usr/lib/eclipse"
    install -d "${pkgdir}/usr/bin"
    ln -s "/usr/lib/eclipse/eclipse" "${pkgdir}/usr/bin/eclipse"

    install -Dm644 "eclipse.desktop" "${pkgdir}/usr/share/applications/eclipse.desktop"

    for i in 16 22 24 32 48 64 128 256 512 1024 ; do
        install -Dm644 eclipse/plugins/org.eclipse.platform_${pkgver}*/eclipse$i.png \
            "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/eclipse.png"
    done
}
