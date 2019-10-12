# Maintainer: Oscar Morante <spacepluk@gmail.com>

_prefix=/opt/Unity

pkgname=unity-editor-language-ja
pkgver=2019.2.9f1
pkgrel=1
pkgdesc="Japanese Language Pack (Preview)"
arch=('x86_64')
url='https://unity3d.com/'
license=('custom')
depends=('unity-editor')
source=("2019.2.9f1.ja::https://new-translate.unity3d.jp/v1/live/54/2019.2/ja")
md5sums=("SKIP")
options=(!strip)
PKGEXT='.pkg.tar' # Prevent compressing of the final package

package() {
  _dest="${pkgdir}${_prefix}/Editor/Data/Localization"
  install -d "${_dest}"
  mv ${pkgver}.ja "${_dest}/ja.po"
}

