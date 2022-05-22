# Maintainer: Daniel Peukert <daniel@peukert.cc>
# Contributor: Joel Goguen <contact+aur@jgoguen.ca>
# Contributor: Vlad M. <vlad@archlinex.net>
# Contributor: Gordin <9ordin @t gmail>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>
_pkgname='flow'
pkgname="$_pkgname-git"
pkgver='0.178.1.r13639.gaf1b83761'
pkgrel='1'
pkgdesc='A static type checker for JavaScript - git version'
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://$_pkgname.org"
license=('MIT')
optdepends=('bash-completion: Bash completion')
makedepends=('git' 'ocaml>=4.13.1' 'dune' 'ocamlbuild' 'ocaml-findlib' 'ocaml-base>=0.14.1' 'ocaml-core_kernel>=0.14.1' 'ocaml-dtoa>=0.3.2' 'ocaml-lwt>=5.4.0' 'ocaml-lwt_log>=1.1.1' 'ocaml-ppx_deriving' 'ocaml-ppx_gen_rec' 'ocaml-ppx_let>=0.14.0' 'ocaml-ppxlib' 'ocaml-sedlex>=2.3' 'ocaml-visitors' 'ocaml-wtf8')
checkdepends=('ocaml-ounit')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$pkgname::git+https://github.com/facebook/$_pkgname")
sha256sums=('SKIP')

_sourcedirectory="$pkgname"

pkgver() {
	cd "$srcdir/$_sourcedirectory/"
	printf '%s.r%s.g%s' "$(sed -nE 's/^version: "([0-9.]*)"$/\1/p' 'flowtype.opam')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$_sourcedirectory/"
	# use the default ocaml behaviour to ignore warnings that upstream escalates to errors for some reason
	OCAMLPARAM='_,warn-error=-a+31' make
}

check() {
	cd "$srcdir/$_sourcedirectory/"
	./runtests.sh "bin/$_pkgname"
}

package() {
	cd "$srcdir/$_sourcedirectory/"
	install -Dm755 "bin/$_pkgname" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 'resources/shell/bash-completion' "$pkgdir/usr/share/bash-completion/completions/$_pkgname"
	install -Dm644 'LICENSE' "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
