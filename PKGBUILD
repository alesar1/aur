# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>

pkgname_=fastr
pkgname=${pkgname_}-bin
pkgver_=19.2.0
pkgver=${pkgver_/-/_}
pkgrel=1
pkgdesc='Graal based, high-performance implementation of the R language'
arch=('x86_64')
url='https://github.com/oracle/fastr'
license=('GPL3')
depends=('graal')
makedepends=()
optdepends=()
provides=("$pkgname_")
conflicts=("$pkgname_")
source=("https://github.com/oracle/$pkgname_/releases/download/vm-${pkgver_}/r-installable-linux-amd64-${pkgver_}.jar")
sha256sums=('cb3aef553a6bfe8347743739fbb579f9ffb231520d74b55c0e82761a4934824d')

package() {
    local file eq permissions mode name target

    mkdir -p "$pkgdir/usr/lib/jvm/java-8-graal/"
    cp -a -t "$pkgdir/usr/lib/jvm/java-8-graal/" jre/ LICENSE_FASTR 3rd_party_licenses_fastr.txt

    printf '\n' >> META-INF/permissions
    while read -r file eq permissions; do
        if [[ $eq != '=' ]]; then
            printf >&2 'second word should be "=": %s %s %s\n' "$file" "$eq" "$permissions"
            return 1
        fi
        case $permissions in
            'rw-------') mode=600;;
            'rw-r--r--') mode=644;;
            'rw-rw-r--') mode=664;;
            'rwxr-xr-x') mode=755;;
            'rwxrwxr-x') mode=775;;
            'rwxrwxrwx') continue;; # symbolic link
            *)
                printf >&2 'unknown permissions: %s\n' "$permissions"
                return 1
                ;;
        esac
        chmod "$mode" -- "$pkgdir/usr/lib/jvm/java-8-graal/$file"
    done < META-INF/permissions

    printf '\n' >> META-INF/symlinks
    while read -r name eq target; do
        if [[ $eq != '=' ]]; then
            printf >&2 'second word should be "=": %s %s %s\n' "$name" "$eq" "$target"
            return 1
        fi
        mkdir -p -- "$pkgdir/usr/lib/jvm/java-8-graal/$(dirname -- "$name")"
        ln -s -- "$target" "$pkgdir/usr/lib/jvm/java-8-graal/$name"
    done < META-INF/symlinks

    install -DTm644 LICENSE_FASTR "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
