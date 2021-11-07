# Maintainer: AlphaJack <alphajack at tuta dot io>

pkgname="jailer"
pkgver=11.2.0
pkgrel=1
pkgdesc="Database Subsetting and Relational Data Browsing Tool"
url="https://github.com/Wisser/Jailer"
license=("Apache")
arch=("x86_64")
depends=("java-runtime>=8")
source=("$pkgname-$pkgver.deb::$url/releases/download/v$pkgver/jailer-database-tools_$pkgver-x64.deb")
sha256sums=('dca3f2a7ff9f272ad6b20779eb22db163802334a47cf26ef0dc5edc3139bec8b')

prepare(){
 tar -xf "data.tar.xz"
 sed -i "opt/jailer-database-tools/lib/jailer-database-tools-Jailer.desktop" \
     -e "s|Icon=.*|Icon=jailer|"
 sed -i "opt/jailer-database-tools/lib/jailer-database-tools-Jailer_Data_Browser.desktop" \
     -e "s|Icon=.*|Icon=jailer|"
}

package(){
 install -d "$pkgdir/usr"
 # not putting executables in /usr/bin because they require ../lib/app/jailer.cfg
 install -D -m 644 "opt/jailer-database-tools/lib/jailer-database-tools-Jailer.desktop" "$pkgdir/usr/share/applications/jailer.desktop"
 install -D -m 644 "opt/jailer-database-tools/lib/jailer-database-tools-Jailer_Data_Browser.desktop" "$pkgdir/usr/share/applications/jailer_data_browser.desktop"
 install -D -m 644 "opt/jailer-database-tools/lib/Jailer.png" "$pkgdir/usr/share/pixmaps/jailer.png"
 install -D -m 644 "opt/jailer-database-tools/share/doc/copyright" "$pkgdir/usr/share/licenses/jailer/LICENSE"
 cp -r "opt" "$pkgdir"
}
