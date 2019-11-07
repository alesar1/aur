# Maintainer: Arley Henostroza <arllk[at]gmail[dot]com>

pkgname=genie-systemd
_pkgname=genie
pkgver=1.17
pkgrel=1
pkgdesc="A quick way into a systemd \"bottle\" for WSL"
arch=('x86_64')
url="https://github.com/arkane-systems/genie"
license=('custom:The Unlicense')
depends=('daemonize' 'dotnet-runtime' 'dotnet-host' 'hostess')
conflicts=('genie-systemd')
provides=('genie-systemd')
source=("${url}/releases/download/${pkgver}/${_pkgname}.tar.gz"
	'change_target.patch'
        'LICENSE')
sha256sums=('438bdd397edb19fb834bbfbc146cd0f11f5c6a57bb3de6d334e9d940970af766'
	    'c48ff96bca7780e6057f92ce875916ed9d0b5f2ed4b0933eba3ff75242582a2d'
            '88d9b4eb60579c191ec391ca04c16130572d7eedc4a86daa58bf28c6e14c9bcd')

prepare() {
  tar -xzf ${_pkgname}.tar.gz
}

package() {
  install -Dm 4755 -o root "systemd-genie/usr/bin/genie" -t "$pkgdir/usr/bin"
  install -Dm 644 -o root "systemd-genie/usr/bin/genie.dll" -t "$pkgdir/usr/bin"
  install -Dm 744 -o root "systemd-genie/usr/bin/Linux.ProcessManager.dll" -t "$pkgdir/usr/bin"
  install -Dm 744 -o root "systemd-genie/usr/bin/System.CommandLine.dll" -t "$pkgdir/usr/bin"
  install -Dm 744 -o root "systemd-genie/usr/bin/Tmds.LibC.dll" -t "$pkgdir/usr/bin"
  install -Dm 644 -o root "systemd-genie/usr/bin/genie.runtimeconfig.json" -t "$pkgdir/usr/bin"
  #install -Dm 755 -o root "systemd-genie/lib/genie/dumpwslenv.sh" -t "$pkgdir/usr/lib/genie/"
  #install -Dm 755 -o root "systemd-genie/lib/genie/readwslenv.sh" -t "$pkgdir/usr/lib/genie/"
  #install -Dm 755 -o root "systemd-genie/lib/genie/runinwsl.sh" -t "$pkgdir/usr/lib/genie/"
  #install -Dm 755 -o root "systemd-genie/lib/systemd/system-environment-generators/10-genie-envar.sh" -t "$pkgdir/usr/lib/systemd/system-environment-generators"
  install -Dm 644 "${srcdir}/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
