# Maintainer: somini <dev@somini.xyz>
pkgname=nitter-git
pkgver=latest
pkgrel=4
pkgdesc="Alternative Twitter front-end"
url="https://github.com/zedeus/nitter"
depends=('redis')
makedepends=('git' 'nim' 'nimble' 'libsass')
backup=('etc/nitter.conf')
license=('AGPL3')
arch=('x86_64')
source=("$pkgname::git+$url.git#branch=master"
            "config.patch"
            "tmpfilesd.conf"
            "nitter.sh"
            "nitter.service")
sha256sums=('SKIP'
            '18399b0ea27d3750f4739e3d17327ba373f5247e4c8552051a50fa3e8e5631f1'
            '832d2963389270332e50da95082d43babbe40124dc2d7177bb19eefac9586891'
            '79469c5cfeacf38c7469a2240ba5c19670ddaf757e6d1b5286206a18a0718487'
            '3c09448a6e9da6afd2554e06c1718e02ed8f037375611057ef7ab52c3dc02371')

pkgver() {
  cd "$pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
    cd "${srcdir}/$pkgname"

    # Tweak the configuration file
    patch -p1 <../../config.patch

    # Based on the Dockerfile
    nimble build -y -d:release
    strip -s nitter
    nimble scss
}

package() {
    # Create the cache directory
    install -D -m644 tmpfilesd.conf "$pkgdir/usr/lib/tmpfiles.d/nitter.conf"
    # SystemD service
    install -D -m644 nitter.service -t "$pkgdir/usr/lib/systemd/system"
    # Use a wrapper script as entrypoint
    install -D -m755 nitter.sh "$pkgdir/usr/bin/nitter"

    main_dir="$pkgdir/usr/share/nitter"
    install -dD "$main_dir"

    cd "${srcdir}/$pkgname"
    # Main EXE
    install -D -m755 nitter -t "$main_dir"
    # Patched Configuration File
    install -D -m600 nitter.conf -t "$pkgdir/etc"
    ## Link it on the "working" directory
    ln -sv "/etc/nitter.conf" "$main_dir/nitter.conf"
    # Public Folder
    cp -r --no-preserve=all public -t "$main_dir"
}
