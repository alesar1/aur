# Maintainer: bitcoinlizard <bitcoinlizard at fastmail dot com>

pkgname=specter-desktop
pkgver=1.7.0
pkgrel=1
pkgdesc="Specter Desktop functions as a watch-only coordinator for multi-signature and single-key Bitcoin wallets."
arch=('any')
url="https://specter.solutions"
license=('MIT')
makedepends=('python-setuptools')
depends=('python' 'libusb' 'systemd-libs' 'python-dotenv' 'python-flask' 'python-flask-login' 'python-flask-wtf' 'python-mnemonic' 'python-hwilib' 'python-embit' 'python-flask-cors' 'python-pgpy' 'python-pyopenssl' 'python-stem' 
'python-typing_extensions' 'python-psutil' 'python-hidapi' 'python-ecdsa' 'python-protobuf' 'python-importlib-metadata' 'python-daemonize' 'python-noiseprotocol-git' 'python-wheel' 'python-pyasn1' 'python-cbor' 'python-urllib3' 'python-flask-babel')

source=("https://github.com/cryptoadvance/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz"
        'specter.service'
	'version.patch')

sha256sums=('eb07d7f48ff869173ec0132b2bd7dbb66bc68729758bcc5da8376341f39efade'
            '9b5f57a0ebd48e6b7d1ac240913e4b502a6e3ffc5b64ff87ed263f1a4810a265'
	    '9eb89b69d711b7bf4aa0894eef649f791d860d615d5cfe91308d980f9c1b263c')

prepare() {
  cd "${pkgname}-${pkgver}"
  patch --forward --strip=1 --input="${srcdir}/version.patch"
}

build() {
  cd "${pkgname}-${pkgver}"
  python setup.py sdist bdist_wheel
}

package() {
  cd "${pkgname}-${pkgver}"

  python setup.py install --root="$pkgdir" --optimize=1 --skip-build

  # install systemd file
  install -Dm 644 "${srcdir}"/*.service -t "${pkgdir}"/usr/lib/systemd/system

  # Install license since the package doesn't include it
  install -Dm 644 "$srcdir/$pkgname-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

}
