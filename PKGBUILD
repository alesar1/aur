# Maintainer: Matt Pallissard <matthew.paul@pallissard.net>
# Contributor: Tom Wizetek <tom@wizetek.com>
# Contributor: koentje
# Contributor: Ian Taylor <ian at lorf dot orgs>
# Contributor: Philipp Tusch <zokker13@posteo.de>

pkgname=apachedirectorystudio
_pkgname=ApacheDirectoryStudio
pkgver=2.0.0.v20170904.13
pkgrel=1
_pkgver="${pkgver%.*}-M${pkgver##*.}"
pkgdesc="Eclipse based LDAP browser and directory client"
arch=('i686' 'x86_64')
url="http://directory.apache.org/studio/"
license=('Apache')
depends=('java-runtime' 'gtk2')
source_i686=("http://www.us.apache.org/dist/directory/studio/$_pkgver/$_pkgname-$_pkgver-linux.gtk.x86.tar.gz")
source_x86_64=("http://www.us.apache.org/dist/directory/studio/$_pkgver/$_pkgname-$_pkgver-linux.gtk.x86_64.tar.gz")
sha256sums_i686=('96281c2af3b1ea04e423b41b465a93b21607ce41b3dc3771861e0b52557eb5af')
sha256sums_x86_64=('581d55f3496827710301dec613466d829cf9a3ed3d4308460e63ca08aaa9d6c9')

package() {
  cd "$pkgdir"

  install -dm0755 opt/$_pkgname usr/bin usr/share/applications/
  cp -a "$srcdir"/$_pkgname/* opt/$_pkgname/

  ln -sf /opt/$_pkgname/$_pkgname usr/bin/$_pkgname
  ln -sf /opt/$_pkgname/$_pkgname usr/bin/$pkgname

  cat > usr/share/applications/$_pkgname.desktop <<EOF
[Desktop Entry]
Version=$_pkgver
Encoding=UTF-8
Name=Apache Directory Studio
Comment=$pkgdesc
Exec=/opt/$_pkgname/$_pkgname
Icon=/opt/ApacheDirectoryStudio/features/org.apache.directory.studio.ldapbrowser.feature_$_pkgver/studio.png
Terminal=false
Type=Application
Categories=Java;Network;
EOF
}
