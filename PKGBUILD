# Maintainer:	Batuhan Baserdem <lastname dot firstname at gmail>
# Maintainer:	Kostas Kardaras <firstname dot lastname at gmail>

pkgname='maestral'
provides=('maestral')
conflicts=('maestral-git')
pkgver=1.0.0
pkgrel=1
pkgdesc='A light-weight and open-source CLI Dropbox client.'
arch=('x86_64')
url="https://github.com/SamSchott/${pkgname}"
license=('MIT')
source=("${url}/archive/v${pkgver}.tar.gz" "maestral@.service")
makedepends=('python-setuptools')
depends=(
    'python>=3.8'
    'python-atomicwrites'
    'python-blinker'
    'python-bugsnag'
    'python-click>=7.0'
    'python-dropbox>=10.0'
    'python-jeepney'
    'python-keyring>=19.0.0'
    'python-keyrings-alt>=3.0.0'
    'python-lockfile'
    'python-pathspec'
    'python-pyro5'
    'python-requests'
    'python-sdnotify'
    'python-watchdog>=0.10.0'
    'python-systemd')
md5sums=('309b748e0bf8d912950e8a3e3ea7d138'
         '25d1041b158c1b1ea42d7290c9c0f91d')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    # Run python setup function
    python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
    # Install the licence
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE.txt" \
    	"${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    # Install the systemd unit provided
    install -Dm644 "${srcdir}/maestral@.service" \
        "${pkgdir}/usr/lib/systemd/user/maestral@.service"
}
