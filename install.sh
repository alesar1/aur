## arg 1:  the new package version
#pre_install() {
  # do something here
#}

## arg 1:  the new package version
post_install() {
  if [ -z "`grep openssl_gost /etc/ssl/openssl.cnf`" ]; then
  echo "

    You have to insert those lines into your /etc/ssl/openssl.cnf
    before any [section]

    # ---
    openssl_conf=openssl_gost # Set GOST Configuration
    .include openssl-gost.cnf
    # ---

  "
  fi
  enginesdir=`openssl version -e|perl -ne '/^ENGINESDIR: "(.+)"$/; print $1'`
  echo "
      Checks after installation:
      $enginesdir should contains the file "gost.so"
  "
}

## arg 1:  the new package version
## arg 2:  the old package version
#pre_upgrade() {
  # do something here
#}

## arg 1:  the new package version
## arg 2:  the old package version
post_upgrade() {
  if [ -z "`grep openssl_gost /etc/ssl/openssl.cnf`" ]; then
    echo "

      You have to insert those lines into your /etc/ssl/openssl.cnf
      before any [section]

      # ---
      openssl_conf=openssl_gost # Set GOST Configuration
      .include openssl-gost.cnf
      # ---

    "
  fi
  enginesdir=`openssl version -e|perl -ne '/^ENGINESDIR: "(.+)"$/; print $1'`
  echo "
      Checks after installation:
      $enginesdir should contains the file "gost.so"
  "
}

## arg 1:  the old package version
#pre_remove() {
  # do something here
#}

## arg 1:  the old package version
#post_remove() {
  # do something here
#}
