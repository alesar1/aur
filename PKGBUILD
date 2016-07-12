# Maintainer: Sebastian Lau <lauseb644@gmail.com>
# Contributor: Serede Sixty Six <serede.dev@gmail.com>, ptrxyz <ptrxyz@gmx.de>

pkgname=nemo-terminal
pkgver=3.0.1
#_mintrel=betsy
pkgrel=2
pkgdesc="An embedded terminal for Nemo, the Cinnamon file manager."
arch=('any')
url="https://github.com/linuxmint/nemo-extensions"
license=('GPL2')
groups=('nemo-extensions')
depends=('nemo>=3.0' 'nemo<3.1' 'nemo-python' 'vte3' 'gobject-introspection-runtime')
optdepends=("python2-xdg: Integration with freedesktop.org standards")
install="${pkgname}.install"

options=('!libtool' '!emptydirs')

source=("http://packages.linuxmint.com/pool/main/n/nemo-terminal/${pkgname}_${pkgver}.tar.gz")
sha256sums=('be29264ad50efd46fb56d9a404e088b1c1576cb7ff561dfce41b3b0d391f4f16')


prepare() {
  # Python2 fix
  msg2 "Fixing to use python2..."
  find -type f | xargs sed -i 's@^#!.*python$@#!/usr/bin/python2@'

  msg2 "Patching for API change from vte 2.90 to vte 2.91..."
  sed -i 's/2\.90/2.91/' "${srcdir}/${pkgname}/src/nemo_terminal.py"
  sed -i 's/fork_command_full/spawn_sync/' "${srcdir}/${pkgname}/src/nemo_terminal.py"
  sed -i 's/self.vscrollbar =/pass #self.vscrollbar =/g' "${srcdir}/${pkgname}/src/nemo_terminal.py"
  sed -i 's/self.hbox.pack_end/pass #self.hbox.pack_end/g' "${srcdir}/${pkgname}/src/nemo_terminal.py"

}


package() {

  install -d ${pkgdir}/usr/share/nemo-python/extensions
  install -d ${pkgdir}/usr/share/glib-2.0/schemas
  install -d ${pkgdir}/usr/share/nemo-terminal
  install ${srcdir}/${pkgname}/src/nemo_terminal.py ${pkgdir}/usr/share/nemo-python/extensions
  install ${srcdir}/${pkgname}/src/org.nemo.extensions.nemo-terminal.gschema.xml ${pkgdir}/usr/share/glib-2.0/schemas
  install ${srcdir}/${pkgname}/pixmap/logo_120x120.png ${pkgdir}/usr/share/nemo-terminal
}
