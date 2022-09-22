# Maintainer: Azael Reyes <azael.devel@gmail.com>


pkgname=muposys
pkgver=0.26.0
pkgrel=1
phase=alpha

prefix=srv
bindir=srv/http
datarootdir=srv/data
libdir=usr/lib 
includedir=usr/include

pkgdesc="Multi-Porpuse Software System"
arch=('x86_64')
license=('GPL')
url="https://github.com/azaeldevel/muposys.git"
depends=('octetos-core' 'octetos-db-abstract' 'cgicc' 'sqlite3')
#backup=('etc/nanorc')
md5sums=('e9b7bf57b5f7a6116af7174c6bf8c189')
source=(https://github.com/azaeldevel/$pkgname/archive/$pkgver-$phase.tar.gz)

build() 
{
    cd $pkgname-$pkgver-$phase
    autoreconf -fi
    ./configure --disable-shared --enable-static --prefix=/$prefix --bindir=/$bindir --datarootdir=/$datarootdir --libdir=/$libdir --includedir=/$includedir --enable-os=archlinux --with-mediumword --with-mariadb
    make
}

package()
{
  	cd $pkgname-$pkgver-$phase
  	make DESTDIR="${pkgdir}" install
	
 	chown http:http $pkgdir/$bindir/*.cgi
 	
	chmod a+w $pkgdir/$datarootdir/http
	chmod a+w $pkgdir/$bindir/*.html
	chmod a+w -R $pkgdir/$bindir/css
	chmod a+w -R $pkgdir/$bindir/js
	chmod a+w -R $pkgdir/$bindir/user-mang
	chown http:http $pkgdir/$datarootdir/http
	chown http:http $pkgdir/$bindir/*.html
	chown http:http -R $pkgdir/$bindir/css
	chown http:http -R $pkgdir/$bindir/js
	chown http:http -R $pkgdir/$bindir/user-mang
	mkdir -p $pkgdir/$bindir/theme
	tar -xf $srcdir/$pkgname-$pkgver-$phase/html/Mkos-Big-Sur.tar.xz -C $pkgdir/$bindir/theme
	chown http:http -R $pkgdir/$bindir/theme
	mv $pkgdir/$bindir/add.cgi $pkgdir/$bindir/user-mang/permissions/
	mv $pkgdir/$bindir/user-permiss.cgi $pkgdir/$bindir/user-mang/permissions/
}
