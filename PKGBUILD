# Maintainer: H. Rosendahl <h [at] ro [dot] sendahl [dot] de>
pkgname=um-git
_gemname=um
pkgver=4.1.0.r1.g9f3e21d
pkgrel=1
pkgdesc="utility to create and maintain your own man pages so you can remember how to do stuff"
arch=("any")
url="https://github.com/sinclairtarget/um"
license=("MIT")
depends=("ruby" "ruby-kramdown")
makedepends=("git" "ruby-rake")
options=(!emptydirs)
conflicts=("um")
source=("${pkgname}::git+${url}")
        
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname/"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/$pkgname/"

    # Update package version
    echo $(pkgver) > "version.txt"

    # Create man pages
    mkdir doc/man1
    rm doc/man1/*
    rake

    # Compress man pages
    find doc/man1/ -name \*.1 -exec gzip {} \;

    # Build gem
    gem build --norc $_gemname.gemspec
}

package() {
    cd "$srcdir/$pkgname/"
    local _gemdir="$(ruby -e'puts Gem.default_dir')"
    gem install --ignore-dependencies --no-user-install --no-document \
        -i "$pkgdir/$_gemdir" -n "$pkgdir/usr/bin" \
        $_gemname-$pkgver.gem
    install -Dm644 "$srcdir"/$pkgname/LICENSE \
        -t "$pkgdir/usr/share/licenses/$pkgname"
    rm "$pkgdir/$_gemdir/cache/$_gemname-$pkgver.gem"
    install -Dm644 "$srcdir"/$pkgname/um-completion.sh \
        "$pkgdir/usr/share/bash-completion/completions/$_gemname"
    install -Dm644 "$srcdir"/$pkgname/doc/man1/*.gz -t \
        "$pkgdir/usr/share/man/man1"
}

# vim:set ts=4 sw=4 et:
