# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

_plug=jvsfunc
pkgname=vapoursynth-plugin-${_plug}-git
pkgver=1.0.11.6.gb81ea80
pkgrel=1
pkgdesc="Plugin for Vapoursynth: ${_plug} (GIT version)"
arch=('any')
url='https://github.com/dnjulek/jvsfunc.git'
license=('GPL')
depends=('vapoursynth-plugin-vsutil-git'
         'vapoursynth-plugin-lvsfunc-git'
         'vapoursynth-plugin-vsrgtools-git'
         )
makedepends=('git'
             'python-pip'
             )
provides=("vapoursynth-plugin-${_plug}")
conflicts=("vapoursynth-plugin-${_plug}")
source=("${_plug}::git+https://github.com/dnjulek/jvsfunc.git")
sha256sums=('SKIP')

pkgver() {
  cd "${_plug}"
  echo "$(git describe --long --tags | tr - . | tr -d v)"
}

build() {
  cd "${_plug}"
  pip wheel --no-deps . -w dist
}

package() {
  cd "${_plug}"
  pip install -I --root "${pkgdir}" --no-warn-script-location --no-deps dist/*.whl

  install -Dm644 README.md "${pkgdir}/usr/share/doc/vapoursynth/plugins/${_plug}/README.md"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
