# Maintainer: Owen Trigueros <owentrigueros@gmail.com>

pkgname=turtl-server-git
_pkgname=server
pkgver=r209.f37f183
pkgrel=1
pkgdesc="The secure, collaborative notebook's server"
arch=('any')
url="https://turtlapp.com/"
license=('GPL3')
depends=('nodejs' 'postgresql')
makedepends=('git' 'npm')
install=$pkgname.install
source=("$pkgname::git+git://github.com/turtl/server.git"
        "turtl.conf"
        "turtl-server-git.install"
        "turtl.service")
        
md5sums=('SKIP'
         '7436fec3178f4204a0bda9519dcc8f08'
         'd91669b7799dea106b8e7f0e5d14e9a7'  
         '222f09bb6a654caa705e14a82ad8db8a')

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir"/"$pkgname"
    npm install
}

package() {
    mkdir -p "$pkgdir"/var/www/turtl/server
    mkdir -p "$pkgdir"/var/www/turtl/server/plugins
    
    cp -r "$srcdir"/"$pkgname"/controllers \
          "$pkgdir"/var/www/turtl/server
    cp -r "$srcdir"/"$pkgname"/helpers \
          "$pkgdir"/var/www/turtl/server
    cp -r "$srcdir"/"$pkgname"/models \
          "$pkgdir"/var/www/turtl/server
    cp -r "$srcdir"/"$pkgname"/node_modules \
          "$pkgdir"/var/www/turtl/server
    cp -r "$srcdir"/"$pkgname"/scripts \
          "$pkgdir"/var/www/turtl/server
    cp -r "$srcdir"/"$pkgname"/tools \
          "$pkgdir"/var/www/turtl/server

    install -Dm644 "$srcdir"/"$pkgname"/config/config.yaml.default \
          "$pkgdir"/var/www/turtl/server/config/config.yaml
    install -Dm644 "$srcdir"/"$pkgname"/server.js \
          "$pkgdir"/var/www/turtl/server/server.js
    install -Dm644 turtl.service \
          "$pkgdir"/usr/lib/systemd/system/turtl.service
    install -Dm644 turtl.conf \
          "$pkgdir"/usr/lib/sysusers.d/turtl.conf
}
