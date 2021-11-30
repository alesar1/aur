pkgname=feedbin-git
_pkgname=feedbin
pkgver=2021.11.17
pkgrel=1
pkgdesc='A nice place to read on the web'
arch=('x86_64')
url='https://feedbin.com/'
license=('MIT')
depends=('ruby2.6' 'ruby2.6-bundler' 'postgresql-10' 'redis' 'memcached' 'elasticsearch2')
optdepends=('apache: Web server'
            'nginx: Web server')
makedepends=('git')
source=("git+https://github.com/feedbin/feedbin.git" ".env.example")
sha256sums=('SKIP'
            '6b9f11017502441951c8586d4ff845f3fe0aa30340c585a9a03334f42c239e98')
build() {
	cd $srcdir/$_pkgname
	sudo bundle-2.6
}


package() {
	mkdir -p $pkgdir/usr/share/webapps/$_pkgname
	install -Dm 755 .env.example $pkgdir/usr/share/webapps/$_pkgname/.env.example
	cp -r $srcdir/$_pkgname/* $pkgdir/usr/share/webapps/$_pkgname
}


