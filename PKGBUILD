# Maintainer: Christopher Arndt <aur at chrisarndt dot de>

_name=SoundFile
pkgname=python-soundfile
pkgver=0.10.3.post1
pkgrel=3
pkgdesc="An audio library based on libsndfile, CFFI and NumPy"
url="https://github.com/bastibe/python-soundfile"
arch=('any')
license=('BSD')
makedepends=('python-setuptools')
depends=('python-cffi' 'libsndfile' 'python-numpy')
source=("https://github.com/bastibe/python-soundfile/releases/download/${pkgver/\.post1/post1}/${_name}-${pkgver}.tar.gz")
sha256sums=('ffd018d59397a0a4c5327087324ff3620bfd770f7e3eb0cd59779af849e8d861')


build() {
  cd "${srcdir}/${_name}-${pkgver}"

  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"

  python setup.py install --root="${pkgdir}" --skip-build --optimize=1

  # install license
  install -Dm644 LICENSE -t "${pkgdir}"/usr/share/licenses/${pkgname}
}
