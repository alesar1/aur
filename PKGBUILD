# Maintainer: "Amhairghin" Oscar Garcia Amor (https://ogarcia.me)
# Contributor: David Birks <david@birks.dev>

pkgname=lens
pkgdesc='The Kubernetes IDE'
pkgver=5.4.1
pkgrel=1
arch=('x86_64')
license=('MIT')
url='https://k8slens.dev'
depends=('gtk3' 'libxss' 'nss')
makedepends=('npm' 'nodejs-lts-fermium' 'yarn')
optdepends=('kubectl: Kubernetes control, can be downloaded from settings'
            'helm: for Apps section, only useful if your deploy uses helm or plan to use it')
conflicts=('lens-bin')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/lensapp/lens/archive/v${pkgver}.tar.gz"
        "${pkgname}.desktop")
b2sums=('bb9e790dd2466db07b26aca9928bd0cd5e8c51578eabd521407d0085f0340dfb57193618ba4612f3c394eae4a07853616f168ab694d550e66c056b80ac6693e4'
        '2aea209098a22d8e4b263a059f6e67b2a3e8f8dfb0c15ac81e33edb4c2be81fd7a6f419a04a77be5b5c8d81b160e6e3f159b4d8639ccab705fffecf149255a36')

build() {
  cd "${pkgname}-${pkgver}"
  make node_modules
  yarn run npm:fix-build-version
  make build-extensions
  yarn dist:dir
}

package() {
  # copy the entire distribution to /usr/share
  mkdir -p "${pkgdir}"/usr/share/${pkgname}
  mv "${srcdir}"/${pkgname}-${pkgver}/dist/linux-unpacked/* \
    "${pkgdir}"/usr/share/${pkgname}

  # icon
  install -Dm 644 "${srcdir}"/${pkgname}-${pkgver}/build/icons/512x512.png \
    "${pkgdir}"/usr/share/icons/hicolor/512x512/apps/open-${pkgname}.png

  # desktop file
  install -Dm 644 "${srcdir}"/${pkgname}.desktop \
    "${pkgdir}"/usr/share/applications/${pkgname}.desktop

  # symlink binary
  mkdir -p "${pkgdir}"/usr/bin
  ln -sf /usr/share/${pkgname}/open-lens \
    "${pkgdir}"/usr/bin/open-lens

  # symlink helm binary
  mkdir -p "${pkgdir}"/usr/share/${pkgname}/resources/helm3
  ln -sf /usr/bin/helm \
    "${pkgdir}"/usr/share/${pkgname}/resources/helm3/helm3
}
