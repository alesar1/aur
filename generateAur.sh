pkgver=2.0.15
pkgrel=1
echo "pkgname=whatsie
pkgver=$pkgver
pkgrel=$pkgrel
pkgdesc=\"A simple & beautiful desktop client for WhatsApp Web.\"
arch=('x86_64')
url=\"https://github.com/Aluxian/Whatsie\"
license=('MIT')
depends=('desktop-file-utils' 'gconf' 'gtk2' 'gvfs' 'hicolor-icon-theme' 'libgudev' 'libgcrypt' 'libnotify' 'libxtst' 'nss' 'python' 'xdg-utils' 'libcap')
optdepends=('hunspell: spell check')
options=('!docs' '!emptydirs')
install=.INSTALL
source=(\"whatsie-\$pkgver-linux-amd64.deb::https://github.com/Aluxian/Whatsie/releases/download/v\$pkgver/whatsie-\$pkgver-linux-amd64.deb\")
md5sums=('caeedca3cc47ab414923c1ffa9ec9fca')
package() {
  msg2 \"Extracting the data.tar.gz...\"
  bsdtar -xf data.tar.gz -C \"\$pkgdir/\"

  # msg2 \"Fixing permissions of documentation folder...\"
  # chmod -R 775 \"\$pkgdir/opt/\"
  # chmod -R 775 \"\$pkgdir/etc/\"
  # chmod -R 775 \"\$pkgdir/usr/\"
}" > PKGBUILD


# wget "https://github.com/Aluxian/Whatsie/releases/download/v$pkgver/whatsie-$pkgver-linux-amd64.deb"

makepkg --printsrcinfo > .SRCINFO
chmod 755 .PKGINFO
chmod 755 .SRCINFO
git add -A
git commit -m "Release $pkgver PackageRel $pkgrel"
git push AUR master
yaourt -S whatsie
