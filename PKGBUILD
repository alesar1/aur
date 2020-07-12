# Maintainer: Torben <git at letorbi dot com>
# Contributor: jtmb <packaging at technologicalwizardry dot com>
# Contributor: EagleXiang <eagle.xiang at outlook dot com>

pkgname=msbuild-stable
_pkgver=16.6+xamarinxplat.2020.04.29.14.43-0xamarin5+ubuntu2004b1
pkgver=${_pkgver//[+-]/_}
pkgrel=1
pkgdesc="Xamarin implementation of the Microsoft build system"
arch=('any')
depends=('mono>=5.0.0')
provides=('msbuild')
conflicts=('msbuild')
url="https://github.com/mono/msbuild"
license=('MIT')
source=("msbuild-amd64-v${_pkgver}.deb::https://download.mono-project.com/repo/ubuntu/pool/main/m/msbuild/msbuild_${_pkgver}_all.deb")
sha256sums=('042bb1da521877e8ff4b2dd157304a7130bb489a3abe0642a0f9e7ff37b4f099')

package() {
  cd "${srcdir}"
  bsdtar xf data.tar.xz
  chmod -R g-w usr
  mv usr "${pkgdir}"
}
