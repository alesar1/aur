# Maintainer: Cedric Meury <cedric@meury.com>
pkgname=uchiwa
pkgver=0.18.2
pkgrel=1
pkgdesc="A simple dashboard for the Sensu monitoring framework, built with Go and AngularJS."
arch=('x86_64' 'i686')
url="https://www.uchiwa.io/"
license=('MIT')
install="${pkgname}.install"
depends=('python2' 'bash')
makedepends=('rpmextract' 'rsync' 'wget')
options=('emptydirs')
source_i686=("http://dl.bintray.com/palourde/uchiwa/uchiwa-${pkgver}-1.i386.rpm")
source_x86_64=("http://dl.bintray.com/palourde/uchiwa/uchiwa-${pkgver}-1.x86_64.rpm")
source=('LICENSE'
        'uchiwa.service')

md5sums_i686=('e92a6e0d543d722137b52485a90e5220')
md5sums_x86_64=('123691c9f09c63196e00e82b5c082b60')
md5sums=('598261aece4dcb18f35ce5435b652d8a'
        'a7222f9eac2a36b5e5c27a7377831dc5')

package() {
    rm $srcdir/opt/uchiwa/bin/.keep
    rm $srcdir/opt/uchiwa/src/.keep
    rm $srcdir/etc/sensu/dashboard.d/.keep
    rm $srcdir/etc/default/uchiwa
    rm -rf $srcdir/etc/default
    rm $srcdir/etc/init.d/uchiwa
    rm -rf $srcdir/etc/init.d

    rsync -ruDq $srcdir/* $pkgdir
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -D -m644 ${pkgname}.service "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"
}

