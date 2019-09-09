# Maintainer: Yigit Dallilar <yigit.dallilar@gmail.com>
# Maintainer: Prasad Kumar
# Contributor: Philip Müller <philm@manjaro.org>

# Taken From here: https://gitlab.manjaro.org/packages/community/microsoft-office-online-jak/blob/master/PKGBUILD

pkgname=('ms-office-online')
pkgver=19.06.2
pkgrel=3
pkgdesc="Microsoft Office Suite Online as a native application"
url="https://www.office.com/"
depends=('jade-application-kit' 'pyside2')
license=('GPL3' 'CC')
arch=('any')
provides=('ms-office-online')
source=("https://gitlab.manjaro.org/applications/ms-office-online-launcher/-/archive/${pkgver}/ms-office-online-launcher-${pkgver}.tar.gz"
        add-mslogin.patch::https://gitlab.manjaro.org/applications/ms-office-online-launcher/commit/afa0d9e64bef5711180fe5072e48536a05ed313d.patch
        sharepoint.patch::https://gitlab.manjaro.org/applications/ms-office-online-launcher/commit/0c3f2a441b1f83daeaaaf51d956daba7ef156b63.patch)
sha256sums=('b72b31e199ce6467fdce821ecff9344fe7f1b314db03e09db162b39558c43c2b'
            'e9ed046efc7599a3b6f45b29e5672bd6e156407c9f463d8b572d8e7165047474'
            'f1adab3b72c567e87afdbb78139226322edc47b7734ede61076d4a0cef855c55')

prepare() {
    cd "ms-office-online-launcher-${pkgver}"
    patch -p1 -i ../add-mslogin.patch
    patch -p1 -i ../sharepoint.patch

}

package() {
    cd "ms-office-online-launcher-${pkgver}"
    mkdir -p $pkgdir/usr/bin
    mkdir -p $pkgdir/usr/share/{applications,pixmaps}
    cp launcher.desktop $pkgdir/usr/share/applications/ms-office-online.desktop
    cp icons/office.png $pkgdir/usr/share/pixmaps/ms-office.png
    cp ms-office-online $pkgdir/usr/bin
    chmod a+x $pkgdir/usr/bin
}


