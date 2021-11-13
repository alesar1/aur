# Maintainer:  Chris Severance aur.severach aATt spamgourmet dott com
# Contributor: Jack Dähn <jack dot daehn at gmail dot com>
# Contributor: Matthew Prenger <matt at prenger dot co>

set -u
pkgname='bytecode-viewer'
pkgver='2.10.16'
pkgrel='1'
pkgdesc='A Java decompiler, editor, debugger, and more'
url='https://bytecodeviewer.com'
arch=('any')
license=('GPL3')
depends=('java-runtime>=8')
optdepends=('graal')
source=(
  "https://github.com/Konloch/bytecode-viewer/releases/download/v${pkgver}/Bytecode-Viewer-${pkgver}.jar"
  'bytecodeviewer'
  'bytecodeviewer.png'
  'bytecodeviewer.desktop'
)
noextract=("${source[0]##*/}")
md5sums=('b9577125f207b2f4737c3858d4d9573e'
         '7b706fa37dd73c80cce81de88c96fd83'
         'a3d3b9e14f92bdd44febe05d9981a685'
         'd28753c688f7068650258d35f4e9572d')
sha256sums=('75a4144ef351334a4c29d55c88111412b1202bef61cc7fd3223ac9569c3bc3ad'
            '6c40ed470b3fc9aa0ee585ef71d86c8a822877e832d406ea365ce3b279e9f95c'
            '380fbc2d958fc5e0c3f7c05b21de83e3d7e956b00ab476439f893f1d10a61a3e'
            'c61b6bc996e7d6f58991a4119db74a7387864b74a2b7aa1979a992b77477c5bb')

package() {
  set -u
  install -Dpm755 'bytecodeviewer' -t "${pkgdir}/usr/bin/"
  install -Dpm644 "Bytecode-Viewer-${pkgver}.jar" "${pkgdir}/usr/share/java/bytecodeviewer/bytecodeviewer.jar"
  install -Dpm644 'bytecodeviewer.desktop' -t "${pkgdir}/usr/share/applications/"
  install -Dpm644 'bytecodeviewer.png' -t "${pkgdir}/usr/share/pixmaps/"
  set +u
}
set +u
