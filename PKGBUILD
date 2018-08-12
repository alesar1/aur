# Maintainer: Ainola
# Contributor: Ethan Schoonover

pkgname=gam
pkgver=4.60
pkgrel=1
pkgdesc="Command line tool for Google G Suite Administrators to manage domain and user settings quickly and easily."
arch=('any')
url="https://github.com/jay0lee/GAM"
license=('Apache')
depends=(
    'python2'
    'python2-google-api-python-client'
    'python2-google-auth-httplib2-git'
    'python2-httplib2'
    'python2-simplejson'
    'python2-gdata'
    'python2-google-auth'
    'perl-mozilla-ca'
)
source=(
    "https://github.com/jay0lee/GAM/archive/v${pkgver}.tar.gz"
    "xdg_config_dirs.patch"
    "gam.sh"
)
sha256sums=('f8274b2aff987a41344bb3ddcd6f43cbda27d5fc8de830a5f961764662cee959'
            'e85568f0f0e038e01c88a5b2b4e30f057faf737f6e8dac1c41463ec20825118a'
            'd93809852ef9eefeb99f3fc1b955305264f93f2552db14b4d9d6fe7c2b08345b')

prepare() {
    cd "$srcdir/GAM-$pkgver"
    patch -p0 < ../xdg_config_dirs.patch
}

package() {
    install -m755 -d "$pkgdir/etc/$pkgname/"
    install -m755 -d "$pkgdir/usr/share/$pkgname"
    touch "$pkgdir/etc/$pkgname/noupdatecheck.txt"
    touch "$pkgdir/etc/$pkgname/nobrowser.txt"
    install -Dm755 "$srcdir/GAM-$pkgver/src/gam.py" "$pkgdir/usr/share/$pkgname/gam.py"
    install -Dm644 "$srcdir/GAM-$pkgver/src/var.py" "$pkgdir/usr/share/$pkgname/var.py"
    install -Dm644 "$srcdir/GAM-$pkgver/src/utils.py" "$pkgdir/usr/share/$pkgname/utils.py"
    install -Dm755 "$srcdir/gam.sh" "$pkgdir/usr/bin/gam"

    ln -s /usr/share/perl5/vendor_perl/Mozilla/CA/cacert.pem \
        "$pkgdir/usr/share/$pkgname/cacert.pem"
}
