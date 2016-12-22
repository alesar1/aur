pkgname=gogs-git
pkgver=0.9.105.1221.r1.79a2745b
pkgrel=1
pkgdesc="Gogs(Go Git Service) is a Self Hosted Git Service in the Go Programming Language."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://gogs.io/"
license=('MIT')
provides=('gogs')
depends=('git')
conflicts=('gogs')
optdepends=('sqlite: SQLite support'
            'mariadb: MariaDB support'
            'postgresql: PostgreSQL support'
            'redis: Redis support'
            'memcached: MemCached support'
            'openssh: GIT over SSH support')
makedepends=('go' 'git' 'glide')
source=('git+https://github.com/gogits/gogs.git#branch=master'
        'git+https://github.com/jteeuwen/go-bindata.git' #Because сommunity package is very outdated
        'gogs.service'
        'gogs.sysusers'
        'gogs.tmpfiles')
md5sums=('SKIP'
         'SKIP'
         '4ea1610580f7e7de4259025f8980942d'
         'e919a9b9cfee91e3ff146bc8841d4d28'
         '06f9a972e6770e50056dc316d44583da')
install=gogs.install
_gogsdir="src/github.com/gogits/gogs"

prepare() {
	export GOPATH="$srcdir"

	mkdir -p ./src/github.com/{gogits,jteeuwen}

	mv    -t ./src/github.com/gogits   ./gogs
	mv    -t ./src/github.com/jteeuwen ./go-bindata

	cd "$_gogsdir"

	glide install

	sed -i conf/app.ini \
	    -e '/^RUN_USER/         c \RUN_USER = gogs' \
	    -e '/^STATIC_ROOT_PATH/ c \STATIC_ROOT_PATH = /usr/share/gogs' \
	;
}

pkgver() {
	cd "$_gogsdir"
	printf '%s.r%s.%s' \
		$(<templates/.VERSION) \
		$(git rev-list --count HEAD...$(git log --pretty=format:%H -n 1 -- templates/.VERSION)) \
		$(git rev-parse --short HEAD) \
	;
}

build() {
	cd "$srcdir/src/github.com/jteeuwen/go-bindata/go-bindata"
	go install -v

	cd "$srcdir/$_gogsdir"

	make PATH="$GOPATH/bin" bindata
	go build -v -tags='sqlite pam cert'
}

package() {
	cd "$_gogsdir"

	install -d "$pkgdir/usr/share/gogs"
	cp     -rt "$pkgdir/usr/share/gogs" ./{templates,public}

	install -Dm0755 -t "$pkgdir/usr/bin"                 ./gogs
	install -Dm0644 -t "$pkgdir/usr/share/licenses/gogs" ./LICENSE
	install -Dm0644 -t "$pkgdir/usr/lib/systemd/system"  "$srcdir/gogs.service"

	install -Dm0644 "$srcdir/gogs.sysusers" "$pkgdir/usr/lib/sysusers.d/gogs.conf"
	install -Dm0644 "$srcdir/gogs.tmpfiles" "$pkgdir/usr/lib/tmpfiles.d/gogs.conf"
}
