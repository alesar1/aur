# vim:set ts=2 sw=2 et:
# Maintainer: orumin <dev@orum.in>

pkgname=mikutter-git
_gitroot=mikutter
pkgver=3.2.9.r0.g29ba42d
pkgrel=1
pkgdesc="a moest twitter client (Upstream version)"
arch=('i686' 'x86_64')
url="http://mikutter.hachune.net/"
license=('MIT')
depends=('ruby-gtk2>=2.2.3' 'ruby-moneta' 'ruby-nokogiri' 'ruby-httpclient')
optdepends=('libnotify: notify support')
conflicts=('mikutter')
provides=('mikutter')
source=(git://toshia.dip.jp/mikutter.git
        mikutter.desktop)
md5sums=('SKIP'
         '18e28a76097af88457462b08752382df')

pkgver() {
  cd "$_gitroot"
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  mkdir "$_gitroot/opt"
  cp -r "$srcdir/$_gitroot" "$pkgdir/opt"

  mkdir -p "$pkgdir/usr/bin"
  cat <<'EOF' > "$pkgdir/usr/bin/mikutter"
#!/bin/sh
ruby /opt/mikutter/mikutter.rb $@
EOF
  chmod a+x "$pkgdir/usr/bin/mikutter"

  mkdir -p $pkgdir/usr/share/applications
  cp "$srcdir/mikutter.desktop" "$pkgdir/usr/share/applications"
  chmod +x $pkgdir/usr/share/applications/mikutter.desktop
}
