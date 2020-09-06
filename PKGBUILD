# Maintainer: Mounir Erhili <mounirerhili@gmail.com>
# Check for new Linux releases in: https://dbeaver.io/download/

pkgname=dbeaver-ce-latest-deb
pkgver=7.2.0
pkgrel=1
pkgdesc='DBeaver Community Edition, Universal Database Manager and SQL Client'
arch=('x86_64')
url='https://dbeaver.io'
license=('GPL')
depends=('java-runtime' 'gtk3' 'gtk-update-icon-cache' 'libsecret')
conflicts=('dbeaver' 'dbeaver-ee')
optdepends=('dbeaver-plugin-apache-poi: DBeaver library for Microsoft Office documents'
  'dbeaver-plugin-batik: DBeaver library for SVG format'
  'dbeaver-plugin-bouncycastle: Bouncy Castle library for DBeaver plugin for SSHv2 tunnels'
  'dbeaver-plugin-office: export data in Microsoft Office Excel format'
  'dbeaver-plugin-sshj: DBeaver plugin for SSHv2 tunnels with Bouncy Castle algorithm'
  'dbeaver-plugin-sshj-lib: SSHv2 library for Java for DBeaver plugin for SSHv2 tunnels'
  'dbeaver-plugin-svg-format: save diagrams in SVG format')
source=("https://dbeaver.io/files/${pkgver}/dbeaver-ce_${pkgver}_amd64.deb")
sha256sums=('5f6c27f3661168932e77f2b4bbdcd7640f8c616258b2d7a37d926cb37d537921')

package() {
  msg2 'Extracting the data.tar.gz...'
  bsdtar -xf data.tar.gz -C "$pkgdir/"

  msg2 'Moving stuff in place...'
  # Launcher
  mkdir -p "$pkgdir/usr/bin"
  ln -s "/usr/share/dbeaver/dbeaver" "$pkgdir/usr/bin/dbeaver-ce"
  chmod +x "$pkgdir/usr/share/dbeaver/dbeaver"
  mv "$pkgdir/usr/share/applications/dbeaver.desktop" "$pkgdir/usr/share/applications/dbeaver-ce.desktop"
}
