# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/UnityLts

pkgname=unity-editor-lts-standardassets
pkgver=2017.4.31f1
pkgrel=1
pkgdesc="Unity Standard Assets for easily getting started building projects in Unity."
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor-lts')
makedepends=('cpio')
source=("2017.4.31f1.pkg::https://download.unity3d.com/download_unity/9c8dbc3421cb/MacStandardAssetsInstaller/StandardAssets.pkg")
md5sums=("5f6adc99fbcb5fadd15461f3ff958187")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}/${_prefix}/Editor/Standard Assets"
  install -d "${_dest}"
  cd "${_dest}"
  cat "${srcdir}/StandardAssets.pkg.tmp/Payload" | gzip -dc | cpio -i
}

