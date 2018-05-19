# Contributor: Andrew Rabert <ar nullsum.net>

pkgname=harmonize
pkgver=0.1.5
pkgrel=1
pkgdesc="Create and synchronize transcoded copies of audio folders."
url="https://github.com/nvllsvm/harmonize"
depends=('ffmpeg' 'flac' 'python')
makedepends=('python-setuptools')
license=('APACHE')
arch=('any')
source=("https://files.pythonhosted.org/packages/e6/36/e4d1db9b627de16adfbece8072b71266a0dc13d73b38b9293b6525cba044/harmonize-0.1.5.tar.gz")
sha256sums=('2b861ca0f3acd4f12ca88698258e9ec6634e856280311632d3f9a8260a205a33')

build() {
  cd harmonize-$pkgver
  python setup.py build
}

package() {
  cd harmonize-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1
}
