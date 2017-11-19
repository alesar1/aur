# Current Maintainer: Troy Engel <troyengel+arch@gmail.com>

pkgname=trace-cmd
pkgver=2.6.2
pkgrel=1
pkgdesc="user-space front-end command-line tool for Ftrace, inclduing the GUI interface application kernelshark as well as trace-graph and trace-view."
arch=('i686' 'x86_64')
url="http://git.kernel.org/?p=linux/kernel/git/rostedt/trace-cmd.git"
license=('GPL2')
depends=('python2' 'gtk2')
makedepends=('pygtk' 'swig' 'docbook-xsl' 'asciidoc')
provides=('trace-cmd')
conflicts=('trace-cmd-git')
source=("http://git.kernel.org/cgit/linux/kernel/git/rostedt/trace-cmd.git/snapshot/trace-cmd-v${pkgver}.tar.gz")
sha256sums=('9ebcf0525fcd197a6ab41bd70bf2d2a7c4e787a6122859a181379d688f970575')

build() {
  cd "${srcdir}/${pkgname}-v${pkgver}"
  
  make PYTHON_VERS=python2 all gui doc
}

package() {
  cd "${srcdir}/${pkgname}-v${pkgver}"

  make PYTHON_VERS=python2 prefix="/usr" DESTDIR="$pkgdir" install install_gui install_doc
}
