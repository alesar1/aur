# Maintainer: Neil Shepperd <nshepperd at gmail dot com>
pkgname=cabal-static
pkgver=2.4.1.0
pkgrel=1
pkgdesc="The command-line interface for Cabal and Hackage. Statically linked."
arch=('i686' 'x86_64' 'armv7h')
url="https://hackage.haskell.org/package/cabal-install"
license=('custom:BSD3')
depends=('gmp' 'zlib' 'libffi')
makedepends=('ghc' 'ghc-static')
provides=(cabal-install)
conflicts=(cabal-install)
source=("https://hackage.haskell.org/package/cabal-install-${pkgver}/cabal-install-${pkgver}.tar.gz")
md5sums=('75cbd6efa11ca4344bd75a5b7b54027e')

# Transitive dependencies of cabal-install
makeconflicts=(haskell-async
			   haskell-base16-bytestring
			   haskell-base64-bytestring
			   haskell-cryptohash-sha256
			   haskell-echo
			   haskell-ed25519
			   haskell-edit-distance
			   haskell-hackage-security
			   haskell-hashable
			   haskell-http
			   haskell-network
			   haskell-network-uri
			   haskell-random
			   haskell-tar
			   haskell-zlib)

build() {
  cd "${srcdir}/cabal-install-$pkgver"

  # Detect conflicting globally installed haskell packages.
  conflicts_present=()
  for conflict in ${makeconflicts[*]}; do
	if (pacman -Q ${conflict} | grep ${conflict}) 2>/dev/null >/dev/null ; then
		conflicts_present+=(${conflict})
	fi
  done

  if [ ${#conflicts_present[@]} -gt 0 ]; then
	  echo "Warning: conflicting globally installed packages detected:" ${conflicts_present[*]}
	  echo "These will probably break the build. You should remove these before building."
	  exit 1
  fi

  EXTRA_CONFIGURE_OPTS="" ./bootstrap.sh --sandbox
}

package() {
  cd "${srcdir}/cabal-install-$pkgver"

  install -Dm755 .cabal-sandbox/bin/cabal \
          "${pkgdir}/usr/bin/cabal"
  gzip -c .cabal-sandbox/share/man/man1/cabal.1 \
       > .cabal-sandbox/share/man/man1/cabal.1.gz
  install -Dm644 .cabal-sandbox/share/man/man1/cabal.1.gz \
          "${pkgdir}/usr/share/man/man1/cabal.1.gz"

  install -Dm644 LICENSE \
          "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  install -Dm644 bash-completion/cabal \
          "${pkgdir}/usr/share/bash-completion/completions/cabal"
}
