# Maintainer: Ainola
# Contributor: Ethan Schoonover

pkgname=gam
pkgver=4.95
pkgrel=1
pkgdesc="Command-line tool for Google GSuite admins to manage settings quickly and easily"
arch=('any')
url="https://github.com/jay0lee/GAM"
license=('Apache')
depends=(
    'python-dateutil'
    'python-dnspython'
    'python-google-api-python-client'
    'python-google-auth'
    'python-google-auth-httplib2'
    'python-google-auth-oauthlib'
    'python-httplib2'
    'python-passlib'
)

source=(
    "$pkgname-$pkgver.tar.gz::https://github.com/jay0lee/GAM/archive/v${pkgver}.tar.gz"
    "xdg_config_dirs.patch"
    "gam.sh"
)

sha256sums=('90e663c9168690574ca5163035f58b7ceb46cb0f8e8c5e6ba907eb151713e4c0'
            '202e3566d837c37526174fb6311232c06d90e3786578668aa58ef3eb0648054a'
            'd93809852ef9eefeb99f3fc1b955305264f93f2552db14b4d9d6fe7c2b08345b')

prepare() {
    mv "GAM-$pkgver" "$pkgname-$pkgver"
    cd "$pkgname-$pkgver"
    patch -p0 < ../xdg_config_dirs.patch
}

package() {
    install -m755 -d "$pkgdir/etc/$pkgname/"
    touch "$pkgdir/etc/$pkgname/noupdatecheck.txt"
    touch "$pkgdir/etc/$pkgname/nobrowser.txt"
    install -Dm755 "$pkgname-$pkgver/src/gam.py" -t "$pkgdir/usr/share/$pkgname/"
    install -Dm644 "$pkgname-$pkgver"/src/{var,utils}.py -t "$pkgdir/usr/share/$pkgname/"
    install -Dm755 gam.sh "$pkgdir/usr/bin/gam"
}
