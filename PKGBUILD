# Maintainer :  Kr1ss  $(tr +- .@ <<<'<kr1ss+x-yandex+com>')
# Contributor : Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor : Sébastien Luttringer <seblu@aur.archlinux.org>


pkgname=lynis3
_pkgname="${pkgname%[0-9]*}"

pkgver=3.0.0
pkgrel=1

pkgdesc='Security and system auditing tool to harden Unix/Linux systems'
url="https://cisofy.com/$_pkgname"
arch=('any')
license=('GPL3')

provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")

depends=('sh' 'awk')
optdepends=('net-tools: networking tests'
            'bind-tools: nameserver tests'
            'iptables: firewall tests'
            'bash-completion: completion for bash')

changelog=CHANGELOG.md
backup=("etc/$_pkgname/default.prf")
source=("https://downloads.cisofy.com/$_pkgname/$_pkgname-$pkgver.tar.gz"{,.asc})
sha512sums=('2f156002ff1cfcd2333c95b57e82e76260364fa58419b9414f2bb461aa77a22c2f1af57a6a934e88030baeb69aa9c274045cfcef359eb496d10acd5b886cb856'
            'SKIP')
validpgpkeys=('73AC9FC55848E977024D1A61429A566FD5B79251')  # CISOfy (Software Signing Key) <security@cisofy.com>


prepare() {
  cd "$_pkgname"
  sed -e "s|/path/to/$_pkgname|/usr/bin/$_pkgname|g" -i "extras/systemd/$_pkgname.service"
}

package() {
  cd "$_pkgname"

  # application
  install -Dm755 "$_pkgname" -t"$pkgdir/usr/bin/"
  install -Dm644 default.prf -t"$pkgdir/etc/$_pkgname/"
  install -dm755 "$pkgdir/usr/share/$_pkgname"
  cp -ra db include plugins "$pkgdir/usr/share/$_pkgname/"
  chmod 644 "$pkgdir/usr/share/$_pkgname"/{include/*,db/{*.db,languages/*}}
  chmod +x "$pkgdir/usr/share/$_pkgname"/include/{consts,functions}

  # doc files
  install -Dm644 README INSTALL *.md FAQ -t"$pkgdir/usr/share/doc/$_pkgname/"
  install -Dm644 "$_pkgname.8" -t"$pkgdir/usr/share/man/man8/"

  # bash completion
  install -Dm644 "extras/bash_completion.d/$_pkgname" -t"$pkgdir/usr/share/bash-completion/completions/"

  # systemd units
  install -Dm644 "extras/systemd/$_pkgname".{service,timer} -t"$pkgdir/usr/lib/systemd/system/"
}


# vim: ts=2 sw=2 et ft=PKGBUILD:
