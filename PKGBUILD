# vim:set ts=2 sw=2 et:
# Maintainer: Gomasy <nyan@gomasy.jp>
# Contributor: 2GMon <t_2gmon@yahoo.co.jp>

pkgname=mikutter
pkgver=3.6.5
pkgrel=1
pkgdesc="a moest twitter client"
arch=('i686' 'x86_64')
url="http://mikutter.hachune.net/"
license=('MIT')
depends=(
'ruby-gtk2>=2.2.3' 'ruby-moneta' 'ruby-nokogiri' 'ruby-httpclient' 'ruby-mini_portile2' 'ruby-totoridipjp'
'ruby-gettext' 'ruby-native-package-installer' 'ruby-cairo-gobject'
)
optdepends=('libnotify: notify support')
source=(
#http://mikutter.hachune.net/bin/$pkgname.$pkgver.tar.gz
http://mikutter.hachune.net/bin/$pkgname.`echo "$pkgver" | tr "_" '-'`.tar.gz
mikutter.desktop
twitter-text.patch
)

prepare() {
  cd $pkgname/vendor/twitter-text
  patch -u configuration.rb < "${srcdir}/twitter-text.patch"
}

package() {
  mkdir "$pkgdir/opt"
  cp -r "$srcdir/$pkgname" "$pkgdir/opt"

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

md5sums=('e07fb0b5ac8641999b5bb5bc64b997d6'
         '18e28a76097af88457462b08752382df'
         '6dc497afdbea6de76d0023e541f5d39c')
