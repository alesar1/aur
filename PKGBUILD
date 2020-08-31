# Maintainer: Elliott Saille <me+aur@esaille.me>
# Maintainer: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: unikum <unikum.pm@gmail.com>
# Contributor: speed145a <jonathan@tagchapter.com>

_pkgname=firewalld
pkgname=firewalld-git
epoch=1
pkgver=r3151.956db5ec
pkgrel=4
pkgdesc='Firewall daemon with D-Bus interface'
arch=(any)
url='https://firewalld.org/'
license=(GPL2)

depends=(
  dconf
  glib2
  hicolor-icon-theme
  nftables
  python-decorator
  python-gobject
  python-slip
)

makedepends=(
  docbook-xsl
  ebtables
  git
  intltool
  ipset
  iptables
)

optdepends=(
  'bash-completion: bash completion'
  'ebtables: old backend'
  'gtk3: firewall-config'
  'ipset: old backend'
  'iptables: old backend'
  'libnm-glib: firewall-config and firewall-applet'
  'libnotify: firewall-applet'
  'python-pyqt5: firewall-applet'
)

conflicts=('firewalld')
provides=('firewalld')

backup=(
  etc/conf.d/firewalld
  etc/firewalld/firewalld.conf
)

source=(
  git+https://github.com/firewalld/firewalld.git
  firewalld-sysconfigdir.patch
)

sha256sums=('SKIP'
            'cf7d655230c43acf10a0f97dffdbcba136729967c8b9a25a930871d54a589834')

pkgver() {
  cd firewalld
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd firewalld

  # Backport zsh completion
  #git cherry-pick -n b0d8723d85651cacbb21f2168d92f3c7052e909d
  patch -Np1 -i ../firewalld-sysconfigdir.patch

  NOCONFIGURE='true' ./autogen.sh
}

build() {
  cd firewalld

  ./configure \
    --prefix='/usr' \
    --localstatedir='/var' \
    --sbindir='/usr/bin' \
    --sysconfdir='/etc' \
    --disable-schemas-compile \
    --disable-sysconfig
  make
}

package() {
  cd firewalld

  make DESTDIR="${pkgdir}" install
  #mv "${pkgdir}"/usr/share/dbus-1
  install -Dm 644 shell-completion/zsh/_firewalld -t "${pkgdir}"/usr/share/zsh/site-functions/
  python -m compileall -d /usr/lib "$pkgdir/usr/lib"
  python -O -m compileall -d /usr/lib "$pkgdir/usr/lib"
}

# vim: ts=2 sw=2 et:
