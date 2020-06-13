# Maintainer: Platon Ryzhikov <ihummer63@yandex.ru>
# Contributor: Lex Black <autumn-wind at web dot de>
# Contributor: Michael Jakl <jakl.michael@gmail.com>
# With contributions from many kind people at https://aur.archlinux.org/packages/julia-git/
# Includes Make.user and compilation flags for aarch64

_pkgbase=julia
pkgbase=${_pkgbase}-aarch64-git
pkgname=(julia-aarch64-git julia-aarch64-git-docs)
pkgver=1.6.0.DEV.r46933.g4e2fb5c72c2
pkgrel=1
arch=(aarch64)
pkgdesc='High-level, high-performance, dynamic programming language'
url='https://julialang.org/'
license=(MIT)
depends=(cblas hicolor-icon-theme libgit2 libunwind libutf8proc openblas icu
         suitesparse mbedtls mpfr openlibm pcre2 libssh2 curl zlib p7zip
         xdg-utils desktop-file-utils gtk-update-icon-cache patchelf llvm)
makedepends=(cmake gcc-fortran gmp python git)
# Needed if building the documentation
#makedepends+=('juliadoc-git' 'texlive-langcjk' 'texlive-latexextra')
source=(git+https://github.com/JuliaLang/julia.git#branch=master
        Make.user
        julia-system-cblas.patch
        libunwind-version.patch
        make-install-no-build.patch)
sha256sums=('SKIP'
            'e0b30ecca13c8fd29147fefc8b11ae14a0d1c12ae01471a9d7e551f8e3af6c14'
            'd4c8fe9eec1bc416549924ae328ceb3f63cc736ecd5e67886faa924e7c14bc5d'
            '856dab2da8124df95e4fbd17f1164bebe1b10e99852fedf38f9dfe31f8ae295c'
            '0b57e0bc6e25c92fde8a6474394f7a99bfb57f9b5d0f7b53f988622ae67de8b7')

pkgver() {
  cd $_pkgbase

  # use the version from VERSION file
  ver=`git show makepkg:VERSION | sed 's/-/./g'`
  # Combine ver with rev-count and latest commit
  printf "%s.r%s.g%s" $(echo $ver) "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd $_pkgbase
  git submodule init
  git submodule update

  msg2 'Configuring the build...'
  cp -v $srcdir/Make.user .

  # Add and use option to build with system cblas
  patch -p1 -i ../julia-system-cblas.patch

  # Fixing libunwind version check
  # https://github.com/JuliaLang/julia/pull/29082
  patch -p1 -i ../libunwind-version.patch

  # Don't build again in install
  patch -p1 -i ../make-install-no-build.patch
}

build() {
  # See FS#58221 for why USE_SYSTEM_ARPACK=0 is used, for now
  export PATH="$srcdir/bin:$PATH"
  env CFLAGS="-O2 -pipe -fstack-protector-strong -w" CXXFLAGS="-O2 -pipe -fstack-protector-strong -w" make VERBOSE=1 -C "$_pkgbase"

  # Building doc
  cd $_pkgbase/doc
  #make man
  #make latexpdf
  make html
  #make info
}

#check() {
#  cd "$_pkgbase/test"
#
#  # this is the make testall target, plus the --skip option from
#  # travis/appveyor/circleci (one test fails with DNS resolution errors)
#  ../julia --check-bounds=yes --startup-file=no ./runtests.jl all --skip Sockets --skip Distributed --skip LibGit2/libgit2
#  find ../stdlib \( -name \*.cov -o -name \*.mem \) -delete
#  rm -r depot/compiled
#}

package_julia-aarch64-git() {
  optdepends=('openblas-lapack: multithreaded replacement for lapack'
              'fftw: If using the FFTW package from julia'
              'gnuplot: If using the Gaston Package from julia')
  provides=('julia')
  conflicts=('julia')
  backup=(etc/julia/startup.jl)


  make -C "$_pkgbase" DESTDIR="$pkgdir" install \
    prefix=/usr \
    libexecdir=/usr/lib \
    sysconfdir=/etc

  # Documentation is in the julia-docs package.
  # Man pages in /usr/share/julia/doc/man are duplicate.
  rm -rf "$pkgdir/usr/share/"{doc,julia/doc}

  install -Dm644 "$_pkgbase/LICENSE.md" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"

  # Remove files that don't belong into the package
  find ${pkgdir} -name ".gitignore" -delete
}

package_julia-aarch64-git-docs() {
  arch=('any')
  pkgdesc='Documentation and examples for Julia'
  depends=(julia)
  provides=(julia-docs)
  conflicts=(julia-docs julia-git-doc)

  install -d "$pkgdir/usr/share/doc"
  cp -r "$_pkgbase/doc" "$pkgdir/usr/share/doc/$_pkgbase"
  rm -rf "$pkgdir/usr/share/doc/julia/man"
  install -Dm644 "$_pkgbase/LICENSE.md" \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"

  # Installing built docs. Adjust it accordingly to your changes in build()
  cd "$_pkgbase/doc/_build"
  cp -dpr --no-preserve=ownership html $pkgdir/usr/share/doc/julia/
  #install -D -m644 man/julialanguage.1 $pkgdir/usr/share/man/man1/julialanguage.1
  #install -D -m644 texinfo/JuliaLanguage.info $pkgdir/usr/share/info/julialanguage.info
  #install -D -m644 latex/JuliaLanguage.pdf $pkgdir/usr/share/julia/doc/julialanguage.pdf

  # Remove files that don't belong into the package
  find ${pkgdir} -name ".gitignore" -delete
}
