# Maintainer: AlphaJack <alphajack at tuta dot io>

pkgname="dkimpy-milter"
pkgver="1.2.2"
pkgrel=1
pkgdesc="DomainKeys Identified Mail (DKIM) milter in Python, with support for ed25519 signatures"
url="https://launchpad.net/dkimpy-milter"
license=("GPL2")
arch=("any")
depends=("python" "python-authres" "python-pynacl" "python-dkim" "python-dnspython" "python-pymilter" "libmilter")
optdepends=("postfix: for sending mail")
source=("https://launchpad.net/$pkgname/1.2/$pkgver/+download/$pkgname-$pkgver.tar.gz"
        "$pkgname.sysusers")
md5sums=("dc0f054bc7dc6178eb31f20d93b73cca"
        "91699122f87d2a9a468922d64e827c0c")
backup=("etc/dkimpy-milter/dkimpy-milter.conf")
install="$pkgname.install"

package(){
 install -d "$pkgdir/run/$pkgname"
 install -D -m 644 "$pkgname.sysusers" "$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
 
 cd "$srcdir/$pkgname-$pkgver"
 sed -e "s|local/bin|bin|g" -e "s|/usr/local/etc|/etc|g" -i "system/dkimpy-milter.service"
 awk '/UserID/ {sub(/dkimpy-milter/,"dkimpy-milter:dkimpy-milter")}1' "etc/dkimpy-milter.conf" > "etc/dkimpy-milter.conf.tmp" 
 mv "etc/dkimpy-milter.conf.tmp" "etc/dkimpy-milter.conf"
 python3 setup.py install --single-version-externally-managed --root="$pkgdir/" --optimize=1
 mv "$pkgdir/usr/etc/" "$pkgdir"
 rm -r "$pkgdir/etc/init.d/"
}
