# Maintainer: Lucas Werkmeister <mail@lucaswerkmeister.de>

java_=11
pkgname_=fastr
pkgname="${pkgname_}-jdk${java_}-bin"
pkgver=20.0.0
pkgrel=1
pkgdesc="GraalVM-based, high-performance implementation of the R language (Java ${java_} version)"
arch=('x86_64')
url='https://github.com/oracle/fastr'
license=('GPL3')
depends=("jdk${java_}-graalvm-bin"
         'gcc-libs') # for libgomp.so.1 and others
source=("https://github.com/oracle/$pkgname_/releases/download/vm-${pkgver}/r-installable-java${java_}-linux-amd64-${pkgver}.jar")
sha256sums=('da934a4bee62738cc11d978c5849fb60f330bd403f3aa4843dab1acbfc5fd3d6')

package() {
    local file eq permissions mode name target

    mkdir -p "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/"
    cp -a -t "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/" languages/ lib/ LICENSE_FASTR 3rd_party_licenses_fastr.txt

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
            'rwxr--r--') mode=744;; # oracle/fastr#119
            'rwxr-xr-x') mode=755;;
            'rwxrwxr-x') mode=775;;
            'rwxrwxrwx') continue;; # symbolic link
            *)
                printf >&2 'unknown permissions: %s\n' "$permissions"
                return 1
                ;;
        esac
        chmod "$mode" -- "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$file"
    done < META-INF/permissions

    printf '\n' >> META-INF/symlinks
    while read -r name eq target; do
        if [[ $eq != '=' ]]; then
            printf >&2 'second word should be "=": %s %s %s\n' "$name" "$eq" "$target"
            return 1
        fi
        mkdir -p -- "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$(dirname -- "$name")"
        ln -s -- "$target" "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/$name"
    done < META-INF/symlinks

    ln -s -- '/usr/lib/gcc/x86_64-pc-linux-gnu/6.5.0/libgfortran.so.3' "$pkgdir/usr/lib/jvm/java-${java_}-graalvm/languages/R/lib/libgfortran.so.3"

    install -DTm644 LICENSE_FASTR "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
