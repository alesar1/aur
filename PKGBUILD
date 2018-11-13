# Maintainer: Arthur Vuillard <arthur@hashbang.fr>

name=watchghost
pkgname=$name
pkgver=0.2.2
pkgrel=1
epoch=1
pkgdesc="Your invisible but loud monitoring pet"
arch=('any')
url='https://gitlab.com/localg-host/watchghost/'
license=('AGPLv3')
depends=('python-tornado' 'python-aioftp' 'python-asyncssh' 'python-watchdog')
makedepends=('python-setuptools')
source=("https://gitlab.com/localg-host/watchghost/-/archive/${pkgver}/watchghost-${pkgver}.tar.gz")
sha256sums=('94f6c05099bad2b8ee6d034a0b0cf04e91a0a81a58134b981b49b4b77d18b692')
conflicts=('watchghost-git')
install=watchghost.install
backup=(
    'etc/watchghost/watchers'
    'etc/watchghost/loggers'
    'etc/watchghost/servers'
    'etc/watchghost/groups'
)

package() {
    cd "${srcdir}/${name}-${pkgver}"
    python3 setup.py build
    python3 setup.py install --prefix=/usr --root="${pkgdir}"

    install -D $startdir/sysusers.conf $pkgdir/usr/lib/sysusers.d/watchghost.conf
    install -D $startdir/watchghost.service $pkgdir/usr/lib/systemd/system/watchghost.service
    for filename in groups loggers servers watchers ; do
      install -D $srcdir/${name}-${pkgver}/watchghost/etc/$filename $pkgdir/etc/watchghost/$filename
    done
}

