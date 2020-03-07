# Maintainer: fordprefect <fordprefect@dukun.de>
# Maintainer: LightDot <lightdot -a-t- g m a i l>

pkgname=gplaycli
pkgver=3.29
_gpapi_ver=0.4.4.4
pkgrel=1
pkgdesc="command line tool to search/install/update Android applications Google PlayStore able to run with cronjob, in order to automatically update an F-Droid server instance"
arch=('any')
url="https://github.com/matlink/gplaycli"
license=('AGPL')
depends=('python' 'python-pyaxmlparser' 'python-setuptools') # 'python-gpapi' temporarily replaced by adapted version
conflicts=('python-gpapi')
optdepends=('java-runtime: needed for autogeneration of a new AndroiID')
install=$pkgname.install
source=("$pkgname-$pkgver.tar.gz::https://github.com/matlink/gplaycli/archive/${pkgver}.tar.gz"
        "gpapi_for_gplaycli-$_gpapi_ver.tar.gz::https://github.com/matlink/googleplay-api/archive/${_gpapi_ver}.tar.gz"
        "$pkgname.install")
md5sums=('a8be0fda33673f6992a7612313cd670c'
         '0ff99d96280fbbb90aec3f9ce0dcde0f'
         'e993658f9913493bb4336d73f23a3195')

package() {
    # install specific gpapi version adapted for gplaycli
    cd googleplay-api-$_gpapi_ver
    python setup.py install --root="${pkgdir}/" --optimize=1
    
    # install gplaycli
    cd "$srcdir/$pkgname-$pkgver"
    python setup.py install --root="$pkgdir/" --optimize=1

    # installs config to build user home - moving to /usr/share
    install -Dm644 gplaycli.conf "$pkgdir/usr/share/$pkgname/config"
    #mkdir -p "$pkgdir/usr/share/$pkgname/"
    #mv "${pkgdir}${HOME}/.config/$pkgname/" "$pkgdir/usr/share/$pkgname/config"
    #rm -rf "$pkgdir/build" "$pkgdir/home"
}
