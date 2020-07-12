# Maintainer: Torben <git at letorbi dot com>
# Contributor: jtmb <packaging at technologicalwizardry dot com>
# Contributor: EagleXiang <eagle.xiang at outlook dot com>

pkgname=msbuild-stable
_pkgver=16.5+xamarinxplat.2020.02.20.11.54-0xamarin2+ubuntu2004b1
pkgver=${_pkgver//[+-]/_}
pkgrel=1
pkgdesc="Xamarin implementation of the Microsoft build system"
arch=('any')
depends=('mono>=5.0.0')
provides=('msbuild')
conflicts=('msbuild')
url="https://github.com/mono/msbuild"
license=('MIT')
source=("msbuild-amd64-v${_pkgver}.deb::http://download.mono-project.com/repo/ubuntu/pool/main/m/msbuild/msbuild_${_pkgver}_all.deb")
sha256sums=('87edbf05fd37a63c5a815a07d12bc340bae8b58331217d7f935a245112bda26f')

package() {
  cd "${srcdir}"
  bsdtar xf data.tar.xz
  chmod -R g-w usr
  mv usr "${pkgdir}"
}
